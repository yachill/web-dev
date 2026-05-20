let winText = document.querySelector("#end-of-game p");
let squareArr = document.querySelectorAll("div.ttt-square");
let currentPlayer = "X";
let EOGDiv = document.getElementById("end-of-game");
let turnCounter = document.querySelector("#player-turn p");

for (const element of squareArr) {
  element.addEventListener("click", (event) => markSymbol(event));
}

function markSymbol(event) {
  let clickedSquare = event.target;

  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
    checkWinner();
    if (checkWinner() == false) checkDraw();
    changePlayer();
  }
}

function checkWinner() {
  let isGameOver = false;

  //check for 3 in a row
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[3 * i].innerText == currentPlayer &&
      squareArr[3 * i + 1].innerText == currentPlayer &&
      squareArr[3 * i + 2].innerText == currentPlayer
    )
      isGameOver = true;
  }
  //check for 3 in a column
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[i].innerText == currentPlayer &&
      squareArr[i + 3].innerText == currentPlayer &&
      squareArr[i + 6].innerText == currentPlayer
    )
      isGameOver = true;
  }
  //check for 3 in a diag
  if (
    squareArr[0].innerText == currentPlayer &&
    squareArr[4].innerText == currentPlayer &&
    squareArr[8].innerText == currentPlayer
  )
    isGameOver = true;
  else if (
    squareArr[2].innerText == currentPlayer &&
    squareArr[4].innerText == currentPlayer &&
    squareArr[6].innerText == currentPlayer
  )
    isGameOver = true;
  //if game is over, display end-of-game div
  if (isGameOver) showWinner();
  return isGameOver;
}

function checkDraw() {
  let isDraw = true;
  for (const element of squareArr) {
    if (element.innerText == "") isDraw = false;
  }
  if (isDraw) {
    showDraw();
  }
}

function showWinner() {
  EOGDiv.style.display = "block";
  winText.innerText = "🥳PLAYER " + currentPlayer + " WINS!🥳";
}

function showDraw() {
  EOGDiv.style.display = "block";
  winText.innerText = "DRAW, try again";
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  turnCounter.innerText = currentPlayer + "'s turn";
}

function resetGame() {
  //hide end-of game div
  EOGDiv.style.display = "none";

  //clear the board
  for (const element of squareArr) {
    element.innerText = "";
  }
}
