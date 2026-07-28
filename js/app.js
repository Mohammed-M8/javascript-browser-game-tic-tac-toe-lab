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
const resetBtnEl = document.querySelector("#reset")
/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false
    render()
}


const updateBoard = () => {
    board.forEach((n, idx) => {
        squareEls[idx].textContent = n
    })
}

const updateMessage = () => {
    if (!winner && !tie) {
        if (turn === 'X') {
            messageEl.innerText = `X's Turn`
        }
        else {
            messageEl.innerText = `O's Turn`

        }
    }
    else if (!winner & tie) {
        messageEl.innerText = "Game has Tied!"
    }
    else {
        messageEl.innerText = `Congratulations, ${turn} have won!`
    }
}

const render = () => {
    updateBoard()
    updateMessage()
}

const checkForTie = () => {
    if (winner) return
    if (board.includes('')) {
        return
    }
    else {
        tie = true
    }
}
const placePiece = (index) => {
    board[index] = turn;
}

const checkWinner = () => {
    winningCombos.forEach((num, idx) => {
        if (board[num[0]] !== '') {
            if (board[num[0]] === board[num[1]] && board[num[0]] === board[num[2]]) {
                winner = true
            }
        }
    })
}

const switchPlayerTurn = () => {
    if (winner) {
        return
    }
    else {
        if (turn === 'X') {
            turn = 'O'
        }
        else {
            turn = 'X'
        }
    }

}
const handleClick = (event) => {
    const squareIndex = event.target.id
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === true) {
        console.log(board[squareIndex])
        return
    }
    placePiece(squareIndex);
    checkWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(s => s.addEventListener('click', handleClick))
resetBtnEl.addEventListener('click', init)
/*--------------------------------*/
init()