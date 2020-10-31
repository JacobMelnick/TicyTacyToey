const [
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9,
] = document.querySelectorAll(".cell");

const cells = [
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9,
]

// Virtual Way
// const content = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
// ]

const enums = {
  x: 'X',
  o: 'O',
}

// Track board X or O

let playerTurn = 0;

const detectWinner = (player) => {
  // 3 in row
    // Diag
    if (cell1.textContent === player && cell5.textContent === player && cell9.textContent === player) {
      return true
    }
    if (cell3.textContent === player && cell5.textContent === player && cell7.textContent === player) {
      return true
    }
    // Horz
    if (cell1.textContent === player && cell2.textContent === player && cell3.textContent === player) {
      return true
    }
    if (cell4.textContent === player && cell5.textContent === player && cell6.textContent === player) {
      return true
    }
    if (cell7.textContent === player && cell8.textContent === player && cell9.textContent === player) {
      return true
    }
    // Vert
    if (cell1.textContent === player && cell4.textContent === player && cell7.textContent === player) {
      return true
    }
    if (cell2.textContent === player && cell5.textContent === player && cell8.textContent === player) {
      return true
    }
    if (cell3.textContent === player && cell6.textContent === player && cell9.textContent === player) {
      return true
    }
}

// Click event adding either an X or an O
const handleCellClick = (event) => {
  const currentCell = event.target;
  // If cell is taken, don't iterate the player turn
  if (currentCell.textContent === enums.x || currentCell.textContent === enums.o) {
    return 
  }

  if (detectWinner(enums.x) === true || detectWinner(enums.o) === true) {
    return;
  }
 
  // Handle Cell Click
  if (playerTurn % 2 === 0) {
    currentCell.textContent = enums.x
  } else {
    currentCell.textContent = enums.o
  }

  if (detectWinner(enums.x)) {
    alert(enums.x + ' has Won')
  }

  if (detectWinner(enums.o)) {
    alert(enums.o + ' has Won')
  }

  // Mark X or O depending on Player turn
  playerTurn += 1;
}

const assignClickListenerToCell = (cell) => {
  cell.addEventListener('click', handleCellClick)
}

cells.forEach(assignClickListenerToCell)

const clearAllCells = () => {
  // Clear all squares 
  for(let i = 0; i < cells.length; i++){
    const currentCell = cells[i];
    console.log('currentCell:', currentCell)
    currentCell.textContent = "";
  }
}

// Bonus:
// Reset Button
document.getElementById("hola").addEventListener("click", () => {
  // window.location.reload(false);
  // Refresh the state
    // Set playerTurn to 0
    playerTurn = 0;
    
    clearAllCells();
  })
  