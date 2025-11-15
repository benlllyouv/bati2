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
    c.addEventListener("click", handleClick);
    boardEl.appendChild(c);
  }
}

function handleClick(e) {
  if (!running) return;

  const index = e.target.dataset.index;
  if (board[index] !== null) return;

  board[index] = turn;
  e.target.textContent = turn;

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

  // Switch turn
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

// Floating hearts generator
setInterval(() => {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = "💜";
  h.style.left = Math.random() * 100 + "%";
  h.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.querySelector(".hearts").appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 500);

resetBtn.addEventListener("click", createBoard);

createBoard();

