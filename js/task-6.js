"use strict";

const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

document.querySelector("button[data-create]").addEventListener("click", () => {
  const number = input.value;
  if (number < parseInt(input.min) || number > parseInt(input.max)) {
    alert("Number 1-100 only");
  } else {
    destroyBoxes();
    createBoxes(number);
  }
  input.value = null;
});

document
  .querySelector("button[data-destroy]")
  .addEventListener("click", destroyBoxes);
