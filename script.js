document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-button');
    const grid = [];
    const width = 8;
    const cellCount = width * width;
    const piggyImages = ['pig1.png', 'pig2.png', 'pig3.png', 'pig4.png']; // 添加你自己的图片名称
    let score = 0;
    let timer;
    let timeLeft = 60;
    let isGameActive = false;

    function createBoard() {
        board.innerHTML = '';
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-id', i);
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
            grid.push(cell);
        }
        populateBoard();
    }

    function populateBoard() {
        grid.forEach(cell => {
            const randomImage = piggyImages[Math.floor(Math.random() * piggyImages.length)];
            cell.style.backgroundImage = `url('${randomImage}')`;
        });
    }

    function handleCellClick(e) {
        if (!isGameActive) return;
        const clickedCell = e.target;
        const clickedImage = clickedCell.style.backgroundImage;
        grid.forEach(cell => {
            if (cell.style.backgroundImage === clickedImage) {
                cell.style.backgroundImage = 'none';
                score += 10;
            }
        });
        scoreDisplay.textContent = `得分: ${score}`;
    }

    function startGame() {
        score = 0;
        scoreDisplay.textContent = `得分: ${score}`;
        timeLeft = 60;
        timerDisplay.textContent = `时间: ${timeLeft}秒`;
        isGameActive = true;
        createBoard();
        timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        timeLeft--;
        timerDisplay.textContent = `时间: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            isGameActive = false;
            alert('游戏结束！得分: ' + score);
        }
    }

    startButton.addEventListener('click', startGame);
});
