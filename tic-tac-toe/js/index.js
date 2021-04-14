const game = document.querySelector('.game'),
  res = document.querySelector('.res'),
  btnGame = document.querySelector('.new-game'),
  fields = document.querySelectorAll('.field'),
  currentPlayer = document.getElementById('curPlyr');

const circle = `<svg class="circle">
				<circle r="45" cx="58" cy="58" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round" />
			</svg>`;
const cross = `<svg class="cross">
				<line class="first" x1="15" y1="15" x2="100" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
				<line class="second" x1="100" y1="15" x2="15" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
			</svg>`;

let player = 'x';
let step = false;
let count = 0;
let stat = {
  x: 0,
  o: 0,
  d: 0,
};

function stepCross(target) {
  target.innerHTML = cross;
  target.classList.add('x');
  count++;
  player = player == 'x' ? 'o' : 'x';
  currentPlayer.innerHTML = player.toUpperCase();
}
function stepZero(target) {
  target.innerHTML = circle;
  target.classList.add('o');
  count++;
  player = player == 'x' ? 'o' : 'x';
  currentPlayer.innerHTML = player.toUpperCase();
}

function init(e) {
  if (!step) stepCross(e.target);
  else stepZero(e.target);
  step = !step;
  win();
}

function newGame() {
  step = false;
  count = 0;
  res.innerText = '';
  fields.forEach((item) => {
    item.innerHTML = '';
    item.classList.remove('x', 'o', 'active');
  });
  game.addEventListener('click', init);
}

function win() {
  let comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < comb.length; i++) {
    if (
      fields[comb[i][0]].classList.contains('x') &&
      fields[comb[i][1]].classList.contains('x') &&
      fields[comb[i][2]].classList.contains('x')
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add('active');
        fields[comb[i][1]].classList.add('active');
        fields[comb[i][2]].classList.add('active');
        res.innerText = 'Выиграли X';
        stat.x += 1;
        updateStat();
      }, 1500);

      game.removeEventListener('click', init);
      return;
    } else if (
      fields[comb[i][0]].classList.contains('o') &&
      fields[comb[i][1]].classList.contains('o') &&
      fields[comb[i][2]].classList.contains('o')
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add('active');
        fields[comb[i][1]].classList.add('active');
        fields[comb[i][2]].classList.add('active');
        res.innerText = 'Выиграли O';
        stat.o += 1;
        updateStat();
      }, 1500);

      game.removeEventListener('click', init);
      return;
    } else if (count === 9) {
      res.innerText = 'Ничья';
      stat.d += 1;
      game.removeEventListener('click', init);
      updateStat();
      return;
    }
  }
}

function updateStat() {
  document.getElementById('sX').innerHTML = stat.x;
  document.getElementById('sO').innerHTML = stat.o;
  document.getElementById('sD').innerHTML = stat.d;
}

btnGame.addEventListener('click', newGame);
game.addEventListener('click', init);
