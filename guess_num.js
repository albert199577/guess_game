let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const enter = document.querySelector('.enter')
const number_box = document.querySelector('.number_box')

let guessCount = 1
let resetButton

function checkGuess() {
    var userGuess = number_box.value;
    if (userGuess === "") {
        return
    }
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses : ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulation! You got it right'
        lastResult.style.backgroundColor = 'green'
        setGameOver()
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER!! stupid'
        setGameOver()
    } else {
        lastResult.textContent = 'he he he ! not confirm'
        lastResult.style.backgroundColor = 'pink'
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low! bitch '
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high! bitch '
        }
    }

    guessCount++
    number_box.value = ''
    number_box.focus()
}

enter.addEventListener('click', checkGuess)

function setGameOver() {
    number_box.disabled = true
    enter.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game'
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1

    var resetParas = document.querySelectorAll('.resultParas p')
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton)

    number_box.disabled = false
    enter.disabled = false
    number_box.value = ''
    number_box.focus()

    lastResult.style.backgroundColor = 'white'

    randomNumber = Math.floor(Math.random() * 100) + 1
}
