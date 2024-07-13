"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value.trim();
  }
});
