// var player1 = prompt('Player One: Enter your name. You will be blue.');
var player1Color = 'red';

// var player2 = prompt('Player Two: Enter your name. You will be red.');
var player2Color = 'yellow';

var game_active = true;
var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');


console.log('Conor');

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};

var currentPlayer = 1;

function changePlayer(){
    if (currentPlayer === 1){
        return currentPlayer = 2;
    }else{
        return currentPlayer = 1;
    }
}

function changeColor(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            row[0].style.backgroundColor = player2Color;
        };
    }
}






Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
})



function returnColor(rowIndex, colIndex){

}

function checkBottom(colIndex){
    let colorReport = returnColor(5, colIndex);
    for (let row = 5; i < tableRow.length; i-- ){
        colorReport = returnColor(row, colIndex);
    }
}

// Selectors

const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');

// Functions



// Event Listeners

// slots.forEach(slot => {slot.addEventListener('click', changeColor)});


resetBtn.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'white';
    })
});
