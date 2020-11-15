const container= document.querySelector('#container');
const restartButton= document.getElementById('restartButton');


function makeGrid(numberOfDivsToCreate){
    let gridCellDimension = ((600 / numberOfDivsToCreate)-2).toFixed(2);
    let gridSize = Math.pow(numberOfDivsToCreate,2);

    //grid cells creation and adding them to container
    while(gridSize>0){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('grid-item');
        newDiv.style.height = gridCellDimension+ 'px';
        newDiv.style.width = gridCellDimension+ 'px';
        newDiv.style.border='1px solid black';
        gridSize--;

    }
    var gridCells = document.querySelectorAll('.grid-item'); 
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); 
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}

function changeColor(){
    this.style.backgroundColor='#F26D68'
    
}

function clearGrid(){
    let numOfCells= prompt('How many cells per side do you want to create?');
    
    if (numOfCells>=1 && numOfCells<=100){
        
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        makeGrid(numOfCells);
    }
    else if(numOfCells== null){
        return;
    }
    else {
    alert('Make sure your number is between 1 and 100');
    clearGrid();
    }
}
restartButton.addEventListener('click',clearGrid);
window.onload = makeGrid(16);

