/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board = [], turn, winner, tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
console.log(squareEls, messageEl);
/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false
    render()
}

const render = () => {
    updateBoard()
    updateMessage()
}

const updateBoard = () => {
    board.forEach((n, idx) => {
        squareEls[idx].textContent = n
    })
}

const updateMessage = () => {
    if (!winner && !tie) {
        if (turn === 'X') {
            turn = 'O'
        }
        else {
            turn = 'X'
        }
    }
    else if (!winner & tie) {
        messageEl.innerText = "Game has Tied!"
    }
    else {
        messageEl.innerText = `Congratulations, ${winner}, You have won!`
    }
}

/*----------------------------- Event Listeners -----------------------------*/


init()