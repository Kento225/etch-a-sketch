const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt-button");
const colorButtons = document.querySelector(".color-buttons");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow")
const rightButtons = document.querySelectorAll("#right-button")
const buttons = document.querySelectorAll("button")
const grid = document.querySelector(".grid")
const grayscale = document.querySelector(".grayscale")
const lightModeBtn = document.querySelector(".light-mode")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
let colorBtn = colorButtons.querySelectorAll("button")

let rainbowMode = false
let squaresInDimension = 16
let amountSquares = 16*16
let gridMode = false
let divArray = ""
let toPaint = ""
grayMode = false;
let lightMode = false;
const darkModeGrid = "solid #F9F6EE 0.1px"
const lightModeGrid = "solid rgb(36,36,36) 0.1px"
let gridColor = darkModeGrid

lightModeBtn.addEventListener("click", function(e){
    if(lightMode === true){
        disableLightMode()
    }else if(lightMode === false){
        enableLightMode()
    }
})
    
grayscale.addEventListener("click", function(e){
    if(grayMode === true){
        disableGrayMode()
    }else if(grayMode === false){
        enableGrayMode()
    }    

})
grid.addEventListener("click", function(e){
    if(gridMode === true){
        disableGridMode()
    }else if(gridMode === false){
        enableGridMode()
    }
    createGrid(gridMode)
})

divArray = populate(amountSquares)

   
//turns rainbow mode on when button is clicked
rainbow.addEventListener("click",function(){
    if(rainbowMode === true){
        disableRainbowMode()
    }else if(rainbowMode === false){
        enableRainbowMode()
    }
})

//picks a color
 let color = colorButtons.addEventListener("click", function(e){
    disableRainbowMode()
    disableGrayMode()
    colorBtn.forEach(button => button.style.transform = "scale(1)")
    if(e.target.classList !== "")
        e.target.style.transform = "scale(1.5)"
        color = e.target.value
})


// prompt user to choose the size of squares inside the container
promptButton.addEventListener("click", function(){
    squaresInDimension = prompt("Enter amount of squares in one dimension")
        if(squaresInDimension>100){
            alert("Max amount of squares in one direction is 100!")
                return
        }else if(squaresInDimension < 1){
            alert("Amount of squares must be more than 1!")
                return
        }
    container.replaceChildren(); //clears the squares
        amountSquares = squaresInDimension*squaresInDimension
       divArray = populate(amountSquares)
            return amountSquares

})
// populates the container
    function populate(amountSquares){
        container.replaceChildren(); 
        container.style.gridTemplateColumns = `repeat(${squaresInDimension}, 1fr)`
        container.style.gridTemplateRows = `repeat(${squaresInDimension}, 1fr)`
    for(i=0;i<amountSquares;i++){ //creates grid with chosen amount of squares
        const divs = document.createElement("div")
        divs.classList.add("divs")
        container.appendChild(divs)
        divs.setAttribute("id", `${i}`) // gives each square an ID
        divs.dataset.rgb = 250
        divs.dataset.uncoloured = true
            }
    divArray = document.querySelectorAll(".divs");
    createGrid(gridMode)
    return divArray
    }
    

//paints squares
    container.addEventListener("mouseover",function(e){
    if(e.target.id !== ""){
        if(rainbowMode === false && grayMode === false){//rainbow mode off, paints squares in selected color
            e.target.dataset.uncoloured = false
            toPaint = document.getElementById(e.target.id)
            toPaint.style.backgroundColor = `#${color}`
        }else if(rainbowMode === true){//rainbow mode on, paints squares in random colors
            toPaint = document.getElementById(e.target.id)
            e.target.dataset.uncoloured = false
            toPaint.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        }else if(grayMode === true){
            toPaint = document.getElementById(e.target.id)
            e.target.dataset.uncoloured = false
                e.target.dataset.rgb -= 25

            toPaint.style.backgroundColor = `rgb(${toPaint.dataset.rgb}, ${toPaint.dataset.rgb}, ${toPaint.dataset.rgb})`
        }
    }
})
// clears the grid
clear.addEventListener("click",function(e){
    container.replaceChildren();
        divArray = populate(amountSquares)
         
}
)
function createGrid(gridMode) {
    if(gridMode === true){
divArray.forEach(div => div.style.border = gridColor)
    }else if(gridMode === false){
        divArray.forEach(div => div.style.border = "")
    }
    }

function enableGrayMode(){
    disableRainbowMode()
    grayMode = true
    grayscale.style.fontWeight = "700"
    grayscale.style.transform = "scale(1.5)"
    return grayMode
}
function disableGrayMode(){
    grayMode = false
    grayscale.style.fontWeight = "400"
    grayscale.style.transform = "scale(1)"
    return grayMode


}
function enableRainbowMode(){
    disableGrayMode()
    rainbowMode = true
    rainbow.style.transform = "scale(1.5)"
    return rainbowMode

}
function disableRainbowMode(){
    rainbowMode = false
    rainbow.style.transform = "scale(1)"
    return rainbowMode
}        
function disableGridMode(){
        gridMode = false
    }
function enableGridMode(){
    gridMode = true
}

let uncoloured = divArray.forEach(div => div.dataset.coloured !== true)

function enableLightMode(){
    lightMode = true
    gridColor = lightModeGrid
    if(gridMode === true){
            divArray.forEach(div => div.style.border = "solid rgb(36, 36, 36) 0.1px")
    }
    divArray.forEach(div => {
        if(div.dataset.uncoloured === true){
            div.style.backgroundColor = "#F9F6EE"
        }} )
    buttons.forEach(button => button.style.border = "solid rgb(36, 36, 36)")
    rightButtons.forEach(button => button.style.backgroundColor = "#F9F6EE")
    buttons.forEach(button => button.style.color = "rgb(36, 36, 36)")
    body.setAttribute( 'style', 'background-color: #F9F6EE !important' )
    container.style.border = " solid rgb(36, 36, 36) 3px"
    lightModeBtn.style.backgroundColor = "#F9F6EE"
    h1.style.color = "rgb(36, 36, 36)"

}
function disableLightMode(){
    lightMode = false
    gridColor = darkModeGrid
    if(gridMode === true){
        divArray.forEach(div => div.style.border = "solid #F9F6EE 0.1px")
}
divArray.forEach(div => {
    if(div.dataset.uncoloured === true){
        div.style.backgroundColor = "rgb(36, 36, 36)"
    }} )
buttons.forEach(button => button.style.border = "solid #F9F6EE")
    rightButtons.forEach(button => button.style.backgroundColor = "rgb(36, 36, 36)")
    buttons.forEach(button => button.style.color = "#F9F6EE")
    body.setAttribute( 'style', 'background-color: rgb(36, 36, 36) !important' )
    container.style.border = " solid #F9F6EE 3px"
    lightModeBtn.style.backgroundColor = "rgb(36, 36, 36)"
    h1.style.color = "#F9F6EE"
    return 
}
