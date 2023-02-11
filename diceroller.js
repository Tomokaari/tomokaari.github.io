const d4Button = document.querySelector('#d4');
const d6Button = document.querySelector('#d6');
const d8Button = document.querySelector('#d8');
const d10Button = document.querySelector('#d10');
const d20Button = document.querySelector('#d20');
const result = document.querySelector('#result');

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

d4Button.addEventListener('click', () => {
  result.textContent = `You rolled a D4 and got a ${rollDie(4)}`;
});

d6Button.addEventListener('click', () => {
  result.textContent = `You rolled a D6 and got a ${rollDie(6)}`;
});

d8Button.addEventListener('click', () => {
  result.textContent = `You rolled a D8 and got a ${rollDie(8)}`;
});

d10Button.addEventListener('click', () => {
  result.textContent = `You rolled a D10 and got a ${rollDie(10)}`;
});

d20Button.addEventListener('click', () => {
  result.textContent = `You rolled a D20 and got a ${rollDie(20)}`;
});
