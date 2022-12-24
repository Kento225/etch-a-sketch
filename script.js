console.log("hi")
const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt-button");
const divs = document.createElement("div");
divs.classList.add("divs")
const colorButtons = document.querySelector(".color-buttons");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow")
let rainbowMode = ""
let squaresInDimension = 16
let amountSquares = 16*16
const grid = document.querySelector(".grid")
let gridMode = 0

grid.addEventListener("click",function(e){
    if(divs.style.border == "solid" && divs.style.borderColor == "#F9F6EE"){
        gridMode = false
    }else{
        gridMode = true

    }
})


populate(amountSquares)


function randomColors(rmode){
    rainbowMode = rmode
    return rainbowMode
}   

rainbow.addEventListener("click",function(){
    randomColors(true)
})


colorButtons.addEventListener("click", function(e){//picks a color
    randomColors(false)
    if(e.target.classList !== "")
    color = e.target.value
    console.log(color);
    console.log(rainbowMode)

   return color;
})


// buttons choose size of squares inside the grid
promptButton.addEventListener("click", function(){
    squaresInDimension = prompt("Enter amount of squares in one dimension")
    if(squaresInDimension>100){
        alert("Max amount of squares in one direction is 100!")
            return
    }
    container.replaceChildren(); //removes previous grid
        amountSquares = squaresInDimension*squaresInDimension
        populate(amountSquares)
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
    }
    


container.addEventListener("mouseover", function(e){//paints squares
    if(e.target.id !== ""){
        if(rainbowMode === false){
            toPaint = document.getElementById(e.target.id)
            toPaint.style.backgroundColor = `#${color}`
        }else if(rainbowMode === true){
            toPaint = document.getElementById(e.target.id)
            toPaint.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
            console.log(amountSquares)

        }
    }})
        

clear.addEventListener("click",function(e){
    container.replaceChildren();
        populate(amountSquares)
         
}
)

