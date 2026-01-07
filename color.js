let main = document.querySelector('.main')
let randomColor = document.querySelector('.random-color')
let colorInput = document.querySelector('#color-input')
let applyColor = document.querySelector('.apply-color')
let colorValue = document.querySelector('color-value')

// console.log(main,randomColor,colorInput,applyColor,colorValue)

function handleRandomColor(){
    console.log("you have clicked the random color")
}
function handleApplyColor(){
    console.log("you have clicked the apply color")
}

randomColor.addEventListener('click', handleRandomColor)
applyColor.addEventListener('click', handleApplyColor)