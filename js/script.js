let drawing = (e) => { changeColor(e.target); };
const sketch = document.querySelector('.sketch');
const scale = document.querySelector('#scale');

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.value == 'square' || e.target.classList.value == 'sketch' || e.target.id == 'marco') {
    e.preventDefault();
    console.log('ji');
  }
  sketch.addEventListener('mouseover', drawing);
});

document.addEventListener('mouseup', () => {
  sketch.removeEventListener('mouseover', drawing);
});
createSketch(16);

scale.addEventListener('input', (e) => {
  const target = e.target;
  let num = target.value;
  createSketch(num);
});


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
  div.style.backgroundColor = 'black';
}
