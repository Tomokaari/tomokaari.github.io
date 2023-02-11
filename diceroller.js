const d4Button = document.querySelector('#d4');
const d6Button = document.querySelector('#d6');
const d8Button = document.querySelector('#d8');
const d10Button = document.querySelector('#d10');
const d20Button = document.querySelector('#d20');
const modifier = document.querySelector('#modifier');
const result = document.querySelector('#result');

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

d4Button.addEventListener('click', () => {
  const roll = rollDie(4) + Number(modifier.value);
  result.textContent = `You rolled a D4, got a ${rollDie(4)}, and with a modifier of ${modifier.value} got a ${roll}`;
});

d6Button.addEventListener('click', () => {
  const roll = rollDie(6) + Number(modifier.value);
  result.textContent = `You rolled a D6, got a ${rollDie(6)}, and with a modifier of ${modifier.value} got a ${roll}`;
});

d8Button.addEventListener('click', () => {
  const roll = rollDie(8) + Number(modifier.value);
  result.textContent = `You rolled a D8, got a ${rollDie(8)}, and with a modifier of ${modifier.value} got a ${roll}`;
});

d10Button.addEventListener('click', () => {
  const roll = rollDie(10) + Number(modifier.value);
  result.textContent = `You rolled a D10, got a ${rollDie(10)}, and with a modifier of ${modifier.value} got a ${roll}`;
});

d20Button.addEventListener('click', () => {
  const roll = rollDie(20) + Number(modifier.value);
  result.textContent = `You rolled a D20, got a ${rollDie(20)}, and with a modifier of ${modifier.value} got a ${roll}`;
});
