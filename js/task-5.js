"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector(".change-color");

btnChange.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
});
