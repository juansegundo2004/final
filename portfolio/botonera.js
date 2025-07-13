const sonidos = {
  mario: new Audio('mario.mp3'),
  zelda1: new Audio('zelda.mp3'),
  snake: new Audio('snake.mp3'),
  kingdom1: new Audio('kingdom.mp3')
};

document.querySelectorAll('.botonera button').forEach(btn => {
  btn.addEventListener('click', () => {
    const sound = btn.getAttribute('data-sound');
    if (sonidos[sound]) {
      sonidos[sound].currentTime = 0; // Reinicia el sonido si ya está sonando
      sonidos[sound].play();
    }
  });
});