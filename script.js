
let container = document.querySelector('#container');
let etch = document.createElement('div');
etch.setAttribute('id', 'etch');
let divList = [];
let grid = 0;

let resetButton = document.querySelector('button');
resetButton.addEventListener('click', generateGrid);

function generateGrid() {

    if (container.lastChild == etch) {
        removeAllChildNodes(etch);
        divList= [];
    }

    grid = prompt('Enter the size of the grid, no more than 99');

    if (grid > 99 || grid < 2) {
        alert('Invalid number');
        generateGrid();
    }

    for (i = 0; i < grid; i++) {
        let wrap = document.createElement('div');
        wrap.classList = 'wrap';
        divList.push(wrap);
        for (j = 0; j < grid; j++) {
            let point = document.createElement('div');
            point.classList = 'point';
            divList[i].appendChild(point);
        }
    }  
    
    for (element of divList) {
        etch.appendChild(element);
    }

    container.appendChild(etch);

    let points = document.querySelectorAll('.point');
    for (point of points) {
    point.addEventListener('mouseenter', (e) => {
        e.target.classList.add('enabled');
    });
}

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}