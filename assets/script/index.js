'use strict';

const output = document.querySelector('.output');
const generateButton = document.querySelector('.button-generate');

const soundEffect = new Audio('./assets/audio/sound-effect.wav');
soundEffect.type = 'audio/wav';

// Return a random number between 0 and 50.
function generateNumber() {
  return Math.floor(Math.random() * 50);
}

function playSoundEffect() {
  soundEffect.play();
}

generateButton.addEventListener('click', () => {
  output.innerText = generateNumber();
  playSoundEffect();
});