const boardSize = 8;
const colors = ['#FF9999', '#FFCC99', '#FFFF99', '#99FF99', '#99CCFF', '#FF99FF'];
let board = [];

function createBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
        board.push(cell);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;
    clickedCell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // 这里可以加入更多游戏逻辑，如检查匹配等
}

window.onload = createBoard;
