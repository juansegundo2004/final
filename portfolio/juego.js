const square = document.getElementById('square');
const scoreSpan = document.getElementById('score');
const mensaje = document.getElementById('mensaje');
const restartBtn = document.getElementById('restart-btn');
let score = 0;
let playing = true;
let timer;

function moveSquare() {
  if (!playing) return;
  const container = document.querySelector('.game-container');
  const maxX = container.offsetWidth - 60;
  const maxY = container.offsetHeight - 60;
  const x = Math.random() * maxX;
  const y = 80 + Math.random() * (maxY - 80);
  square.style.left = x + 'px';
  square.style.top = y + 'px';
  clearTimeout(timer);
  timer = setTimeout(gameOver, 1200);
}

function gameOver() {
  playing = false;
  square.style.display = 'none';
  mensaje.textContent = '¡Perdiste! Puntaje final: ' + score;
  restartBtn.style.display = 'inline-block';
}

square.addEventListener('click', function() {
  if (!playing) return;
  score++;
  scoreSpan.textContent = score;
  moveSquare();
});

restartBtn.addEventListener('click', function() {
  score = 0;
  scoreSpan.textContent = score;
  mensaje.textContent = '';
  playing = true;
  square.style.display = 'block';
  restartBtn.style.display = 'none';
  moveSquare();
});

// Iniciar juego
moveSquare();