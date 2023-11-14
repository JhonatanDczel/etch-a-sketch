//Funciones de expresion
let drawing = (e) => { changeColor(e.target); };

//Selectores
const sketch = document.querySelector('.sketch');
const scale = document.querySelector('#scale');
const rainbow = document.querySelector("#rainbow");

//Variables globales
let colorMode = 'normal';

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.value == 'square' || e.target.classList.value == 'sketch' || e.target.id == 'marco') {
    e.preventDefault();
  }
  sketch.addEventListener('mouseover', drawing);
});

document.addEventListener('mouseup', () => {
  sketch.removeEventListener('mouseover', drawing);
});
createSketch(16);

//Event Listeners for buttons 
scale.addEventListener('input', (e) => {
  const target = e.target;
  let num = target.value;
  createSketch(num);
});

rainbow.addEventListener('click', () => { colorMode = 'rainbow'; });


function createSketch(num) {
  const oldSquares = document.querySelectorAll('.square');
  oldSquares.forEach(e => {
    e.remove();
  });
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = 100 / num + '%';
    square.style.height = 100 / num + '%';
    sketch.appendChild(square);
  }
}

function changeColor(div) {
  if (div.id == 'sketch') return;
  let color;
  switch (colorMode) {
    case 'rainbow':
      color = getColorRainbow();
      break;

    default:
      color = 'black';
      break;
  }
  div.style.backgroundColor = color;
}

function getColorRainbow() {
  let r = getRandomInt(256);
  let g = getRandomInt(256);
  let b = getRandomInt(256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
