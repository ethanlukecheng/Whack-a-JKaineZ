let score = 0;
let scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName("hole");

setInterval(function () {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 500);

const moleContainer = document.getElementById('whack-a-mole');
moleContainer.addEventListener('click', (event) => {
  if (event.target.matches('.mole')) {
    const currentMole = event.target;
    currentMole.classList.toggle('mole');

    score++;
    scoreDisplay.innerText = score;
  }
})


