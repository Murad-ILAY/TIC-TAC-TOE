let gameDiv = document.getElementById('game')
let h1 = document.getElementById('result')
let firstPlayerScore = document.getElementById('scoreX')
let secondPlayerScore = document.getElementById('scoreO')
let player = true
let winner = null
let player1 = 0
let player2 = 0
firstPlayerScore.innerText = player1
secondPlayerScore.innerText = player2

let gameArray = Array(9).fill(null)
console.log(gameArray);

let winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//Find Winner
const findWinner = () => {
    winningPosition.map(position => {
        let [a, b, c] = position

        if (gameArray[a] && gameArray[a] === gameArray[b] && gameArray[b] === gameArray[c]) {
            h1.innerText = gameArray[a] + "  is WINNER!!!...."

            let boxes = document.querySelectorAll('.box')
            boxes[a].classList.add('winner')
            boxes[b].classList.add('winner')
            boxes[c].classList.add('winner')
            winner = gameArray[a]

            if (gameArray[a] === "X") {

                firstPlayerScore.innerText = ++player1
            } else {
                secondPlayerScore.innerText = ++player2
            }
        }
    })

    // find number of null boxes and check if no winner
    let count = gameArray.filter(a => !a).length
    if (!winner && !count) {
        h1.innerText = "NO WINNER!"
    }
}


//Add cells and get coordinates
for (let i = 0; i < 9; i++) {
    let box = document.createElement('div')
    box.classList.add('box', `coordinate-${i}`)


    box.addEventListener('click', () => {
        if (!box.innerText && !winner) {
            box.innerText = player ? 'X' : 'O'
            player = !player;

            let coordinate = box.classList.value.split('-')[1]
            gameArray[coordinate] = box.innerText
            console.log(gameArray);
            findWinner()
        }

    })
    gameDiv.append(box);

}

//Reset Game
document.getElementById('reset').addEventListener('click', () => {
    [...document.querySelectorAll('.box')].map(box => {
        box.innerText = ''
        box.classList.remove('winner')
    })

    gameArray = Array(9).fill(null)
    console.log((gameArray));
    player = true
    h1.innerText = ''
    winner = null
})