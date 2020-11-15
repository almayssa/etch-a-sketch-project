const container= document.querySelector('#container');
const restartButton= document.getElementById('restartButton');
const applyButton= document.getElementById('applyButton');



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
    //testing if the function makeGrid works
    console.log('Grid has been created!!')
}

function changeColor(){
    this.style.backgroundColor='#F26D68'
    
}
//clearing the grid
function clearGrid(){
    
        
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        makeGrid(16);
    
    
    
}

//changing the number of cells 
function changeNumOfCells(){
    let numOfCells= document.getElementById('numberOfCells').value;
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());

    if (numOfCells>=1 && numOfCells<=100){
        makeGrid(numOfCells);
    }
    else {
        alert('Make sure your number is between 1 and 100');
        makeGrid(16);
    }
}

applyButton.addEventListener('click',changeNumOfCells);
restartButton.addEventListener('click',clearGrid);
makeGrid(16);

