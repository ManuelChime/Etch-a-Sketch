let gridPerLine;
const btn = document.querySelector('#btn');
const randomNumber = () => (Math.floor(Math.random() * 255));
const gridContainer = document.querySelector('.container');
btn.addEventListener('click', () => {
  let input = prompt('How many squares per side?(max. 100)');
  gridPerLine = Number(input);
  if (isNaN(gridPerLine) || gridPerLine < 1 || gridPerLine > 100) {
    alert('Please enter a number between 1 and 100.');
    gridPerLine = 1;
  }
  const grid = document.querySelector('p');
  grid.textContent = `Grid: ${gridPerLine}x${gridPerLine}`;
  createGrid(gridPerLine);
});

function createGrid(gridPerLine) {
    // Clear the existing grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // Create the new grid
    for (let i = 0; i < gridPerLine**2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.classList.add(`grid-item-${i}`);
        div.style.border = 'solid 1px #f1f1f1';
        div.style.width = `${100/gridPerLine}%`;
        div.style.height = `${100/gridPerLine}%`;
        gridContainer.appendChild(div);
        div.style.opacity = 0;
        div.addEventListener('mouseover', () => {
            div.style.opacity = Number(div.style.opacity) + 0.1;
            const R = randomNumber();
            const G = randomNumber();
            const B = randomNumber();   
            div.style.backgroundColor = `rgb(${R},${G},${B})`;
            div.style.border = `solid 1px rgb(${R},${G},${B})`;
        });
    }
    
}
