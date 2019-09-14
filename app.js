while (!player1){
    var player1 = prompt('Player One: Enter your name. You will be red.');
};
var player1Color = 'red';

while (!player2){
    var player2 = prompt('Player Two: Enter your name. You will be yellow.');
};
var player2Color = 'yellow';

// Selectors


var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset');

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`

// Log cell coordinates when clicked

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};


// Funtions

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
            if (currentPlayer === 1){
                row[0].style.backgroundColor = player1Color;
                playerTurn.textContent = `${player2}'s turn`
                return currentPlayer = 2;
            }else{
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn`;
                return currentPlayer = 1;
            }
        };
    }
}

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
})


resetBtn.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'white';
    })
});
