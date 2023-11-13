const sketch = document.querySelector('.sketch');
const scale = document.querySelector('#scale');

scale.addEventListener('input', (e) => {
  const target = e.target;
  let num = target.value;
  createSketch(num);
});

sketch.addEventListener('mouseover', (e) => {
  changeColor(e.target);
});
createSketch(16);

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
