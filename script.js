console.log("hi")
const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt-button");
const colorButtons = document.querySelector(".color-buttons");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow")
let rainbowMode = ""
let squaresInDimension = 16
let amountSquares = 16*16
const grid = document.querySelector(".grid")
let gridMode = true
let divArray = ""
    
grid.addEventListener("click", function(e){
    if(gridMode === true){
        gridMode = false
    }else if(gridMode === false){
        gridMode = true
    }
    createGrid(gridMode)
})

divArray = populate(amountSquares)

//function to switch rainbow mode on and off
function randomColors(rmode){
    rainbowMode = rmode
    return rainbowMode
}   
//turns rainbow mode on when button is clicked
rainbow.addEventListener("click",function(){
    randomColors(true)
})

//picks a color
colorButtons.addEventListener("click", function(e){
    randomColors(false)//turns off rainbow mode when color is chosen
    if(e.target.classList !== "")
    color = e.target.value
    console.log(color);
    console.log(rainbowMode)

   return color;
})


// prompt user to choose the size of squares inside the grid
promptButton.addEventListener("click", function(){
    squaresInDimension = prompt("Enter amount of squares in one dimension")
        if(squaresInDimension>100){
            alert("Max amount of squares in one direction is 100!")
                return
        }else if(squaresInDimension < 1){
            alert("Amount of squares must be more than 1!")
                return
        }
    container.replaceChildren(); //removes previous grid
        amountSquares = squaresInDimension*squaresInDimension
       divArray = populate(amountSquares)
            return amountSquares

})
// populates the grid
    function populate(amountSquares){
        container.replaceChildren(); //removes previous grid
        container.style.gridTemplateColumns = `repeat(${squaresInDimension}, 1fr)`
        container.style.gridTemplateRows = `repeat(${squaresInDimension}, 1fr)`
    for(i=0;i<amountSquares;i++){ //creates grid with chosen amount of squares
        const divs = document.createElement("div")
        divs.classList.add("divs")
        container.appendChild(divs)
        divs.setAttribute("id", `${i}`) // gives each square an ID
    }
    divArray = document.querySelectorAll(".divs");
    createGrid(gridMode)
    return divArray
    }
    

//paints squares
container.addEventListener("mouseover", function(e){
    if(e.target.id !== ""){
        if(rainbowMode === false){//rainbow mode off, paints squares in selected color
            toPaint = document.getElementById(e.target.id)
            toPaint.style.backgroundColor = `#${color}`
        }else if(rainbowMode === true){//rainbow mode on, paints squares in random colors
            toPaint = document.getElementById(e.target.id)
            toPaint.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        }
    }})
        
// clears the grid
clear.addEventListener("click",function(e){
    container.replaceChildren();
        divArray = populate(amountSquares)
         
}
)
function createGrid(gridMode) {
    if(gridMode === true){
divArray.forEach(div => div.style.border = "solid white 0.1px")
    }else if(gridMode === false){
        divArray.forEach(div => div.style.border = "")
    }
    }
