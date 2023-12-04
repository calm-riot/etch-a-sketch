let board = document.querySelector('#board');


createGrid();
function createGrid(gridX = 16, gridY = 16) {
    for (let i = 0; i < gridX * gridY; i++) {
        let box = document.createElement('span');
        box.style.backgroundColor = 'white';
        box.id = 'box'

        board.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'black';
        })
    }
    board.style.gridTemplateColumns = `repeat(${gridX}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridY}, 1fr)`;
    console.log(gridX);
    console.log(gridY);
}
let clearGridButton = document.querySelector('.clear');

function clearGrid() {
    let gridBoxes = document.querySelectorAll('#box');
    for (let i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].remove();
    }
    createGrid();
}

clearGridButton.addEventListener('click', clearGrid);


let resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
    let newGridSize = prompt("Enter new grid size");
    if (newGridSize > 128) {
        alert("Size cannot be greater than 128(veryy laggy)");
    }
    else if (newGridSize == null) {
        
    }
    else {
        let gridX = newGridSize;
        let gridY = newGridSize;
        clearGrid();
        createGrid(newGridSize, newGridSize);
    }

})
