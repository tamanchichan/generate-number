'use strict';

const output = document.querySelector('.output');
const generateButton = document.querySelector('.button-generate');

// Return a random number between 0 and 50.
function generateNumber() {
  return Math.floor(Math.random() * 50);
}

generateButton.addEventListener('click', () => {
  output.innerText = generateNumber();
});