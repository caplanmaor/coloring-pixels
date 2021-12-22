let activeColor = "black";
let isClicked = false;
let pixelCount = 1440;

const colorPallete = [
  "red",
  "green",
  "pink",
  "blue",
  "yellow",
  "brown",
  "teal",
  "black",
  "purple",
  "beige",
  "Chartreuse",
  "navy",
];

createColorPallete();
createPixelGrid();
getClearButton();

function createColorPallete() {
  for (let color of colorPallete) {
    let colorRect = document.createElement("button");
    colorRect.classList.add("color-colorRect");
    colorRect.style.backgroundColor = color;
    colorRect.addEventListener("click", changeColor);
    document.getElementById("control-panel").appendChild(colorRect);
  }
}

function createPixelGrid() {
  i = pixelCount;
  while (i > 0) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    // pixel.addEventListener("mousedown", setIsClickedOn);
    pixel.addEventListener("mousedown", fillColor);
    pixel.addEventListener("mouseup", setIsClickedOff);
    pixel.addEventListener("mouseover", checkIfClicked);
    document.getElementById("pixel-grid").appendChild(pixel);
    i--;
  }
}

function changeColor(e) {
  activeColor = e.target.style.backgroundColor;
}

// function setIsClickedOn() {
//   isClicked = true;
// }

function setIsClickedOff() {
  isClicked = false;
}

function checkIfClicked(e) {
  if (isClicked === true) {
    fillColor(e);
  }
}

function fillColor(e) {
  e.target.style.backgroundColor = activeColor;
  isClicked = true;
}

function getClearButton() {
  clearButton = document.getElementById("clearbtn");
  clearButton.addEventListener("click", clearScrean);
}

function clearScrean() {
  pixels = document.getElementsByClassName("pixel");
  i = 0;
  while (i < pixelCount) {
    pixels[i].style.backgroundColor = "white";
    i++;
  }
}
