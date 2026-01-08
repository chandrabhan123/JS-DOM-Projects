let main = document.querySelector("body");
let randomColor = document.querySelector(".random-color");
let colorInput = document.querySelector("#color-input");
let applyColor = document.querySelector(".apply-color");
let colorValue = document.querySelector(".color-value");

// console.log(main,randomColor,colorInput,applyColor,colorValue)
const colorArray = [
  "white",
  "black",
  "green",
  "Yellow",
  "red",
  "blue",
  "orange",
  "tomato",
  "cyan",
  "lightcoral",
  "acqua"
];
const randomColorGenerator = () => {
  let randomNumber = Math.floor(Math.random() * colorArray.length);
  return (colorArray[randomNumber]);
};


const changeColor = (color) => {
  main.style.backgroundColor = color;
  colorValue.innerText = color;
};

function handleRandomColor() {
let color = randomColorGenerator();
changeColor(color)
}

function handleApplyColor() {
  let color = colorInput.value;
  changeColor(color);
}

randomColor.addEventListener("click", handleRandomColor);
applyColor.addEventListener("click", handleApplyColor);
