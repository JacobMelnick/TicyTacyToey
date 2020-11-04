const cell1 = document.querySelector('#cell1')
const cell2 = document.querySelector('#cell2')
const cell3 = document.querySelector('#cell3')
const cell4 = document.querySelector('#cell4')
const cell5 = document.querySelector('#cell5')
const cell6 = document.querySelector('#cell6')
const cell7 = document.querySelector('#cell7')
const cell8 = document.querySelector('#cell8')
const cell9 = document.querySelector('#cell9')
const cell0 = document.querySelector('#cell0')

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
]
let number1;
let number2;
let answer;

const handleCellClick = (event) => {
  const currentCell = event.target;
  // If number1 is empty assign there
  if (number1 === undefined){
    number1 = parseInt(currentCell.value)
  } else if(number2 === undefined) {
    // if number1 is full assign to number2
    number2 = parseInt(currentCell.value)
  } else {
    // if number1 and 2 are full calculate sum
    answer = number1 + number2; 
    alert(`${number1} + ${number2} = ${answer}`)
    number1 = undefined;
    number2 = undefined;
  }
  console.log('number1:', number1)
  console.log('number2:', number2)
}

numberCells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick)
})



  


  


  const assignClickListenerToCell = (cells) => {
    console.log("click")
  }








  
    
    
