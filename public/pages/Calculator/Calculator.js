// HTML Input Selectors
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');
const cell0 = document.querySelector('#cell0');
const equals = document.querySelector('#cell10');
const penis = document.querySelector("#inputBox");
const clear = document.querySelector("#clear")
const numberCells = [
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9,
  cell0,
];

// State:
let numbers = [];

const updateUI = () => {
  penis.textContent = `${numbers.join(' + ')}`;
}

const handleCellClick = (event) => {
  const currentCell = event.target;
  numbers.push(parseInt(currentCell.value))
  console.log('numbers:', numbers)
  updateUI()
}

numberCells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
})

const handleEqualsClick = (event) => {
  // sum of numbers
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i]; 
  }
  numbers = [answer]
  updateUI()
}

equals.addEventListener('click', handleEqualsClick);

const handleClearClick = (event) => {
  // if number1 and 2 are full calculate sum
  answer = ''; 
  numbers = []; //here is where we see the small fry mating with the big fry
  updateUI()
}

clear.addEventListener('click', handleClearClick);