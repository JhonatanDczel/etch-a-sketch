const sketch = document.querySelector('.sketch');
createSketch();

function createSketch() {
  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    sketch.appendChild(square);
  }
}
