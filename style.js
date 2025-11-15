console.log("JS loaded successfully!");

const boardEl = document.getElementById("board");
const messageEl = document.getElementById("message");
const resetBtn = document.getElementById("reset");

let board = Array(9).fill(null);
let turn = "💖"; // Ben
let running = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function createBoard() {
  boardEl.innerHTML = "";
  board = Array(9).fill(null);
  running = true;
  turn = "💖";
  messageEl.textContent = "";
  
  for (let i = 0; i < 9; i++) {
    const c = document.createElement("div");
    c.className = "cell";
    c.dataset.index = i;
    c.onclick = handleClick;  // 👈 FIXED: use onclick instead of addEventListener
    boardEl.appendChild(c);
  }
}

function handleClick(event) {
  if (!running) return;

  const index = event.target.dataset.index;
  if (board[index] !== null) return;

  board[index] = turn;
  event.target.textContent = turn;

  if (checkWin(turn)) {
    showWin(turn);
    running = false;
    return;
  }

  if (board.every(v => v !== null)) {
    messageEl.textContent = "Aww it's a tie 🤍 cuddle time";
    running = false;
    return;
  }

  turn = turn === "💖" ? "🌙" : "💖";
}

function checkWin(symbol) {
  return winPatterns.some(pattern =>
    pattern.every(i => board[i] === symbol)
  );
}

function showWin(symbol) {
  messageEl.textContent = symbol === "💖"
    ? "Ben wins! 💖💜"
    : "Bati wins! 🌙💜";

  winPatterns.forEach(pattern => {
    if (pattern.every(i => board[i] === symbol)) {
      pattern.forEach(i => {
        boardEl.children[i].classList.add("win");
      });
    }
  });
}

resetBtn.onclick = createBoard;

createBoard();

 
