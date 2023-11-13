const sketch = document.querySelector('.sketch');

sketch.addEventListener('mouseover', (e) => { changeColor(e.target); });
createSketch();

function createSketch() {
  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    sketch.appendChild(square);
  }
}

function changeColor(div) {
  div.style.backgroundColor = 'black';
}
