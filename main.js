// game random num
let confirm_num = Math.floor(Math.random() * 100) + 1;
// submit bottom
let enter = document.querySelector(".enter");
console.log(confirm_num);
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let range = document.querySelector(".range");
// game window 
let main = document.querySelector("main");
let guess_num = document.querySelector(".number_box");
let round = 1;
let result = document.querySelector(".result");
//guess range
let n1 = 1;
let n2 = 100;
main.addEventListener("submit", e => {
    e.preventDefault();

    let user_num = guess_num.value;
    // setting gameOver condition
    if (Number(user_num) === confirm_num) {
        lastResult.textContent = "Congratulation! You got it right";
        lastResult.style.backgroundColor = "lightblue";
        range.textContent = "`Bitch !";
        gameOver();
    } else if(round == 10) {
        lastResult.textContent = 'GAME OVER!! stupid';
        lastResult.style.backgroundColor = "pink";
        gameOver();
    } else {
        lastResult.textContent = "he he he ~ Not Confirm number";
        lastResult.style.backgroundColor = "green";
        if (user_num <= confirm_num) {
            n1 = user_num;
        } else if (user_num > confirm_num) {
            n2 = user_num;
        }
        guess_num.setAttribute("min", n1);
        guess_num.setAttribute("max", n2);
        range.textContent = "Please Guess Number " + n1 + " - " + n2;
        
    }
    
    


    guesses.innerText = "Round " + round + " your guesses " + user_num;
    round++;
    guess_num.value = "";
})

function gameOver() {
    user_num = guess_num.value;
    user_num.disabled = true;
    enter.disabled = true;
    resetButton = document.createElement("button");
    resetButton.innerText = "Start new game";
    let container = document.querySelector("main .result");
    container.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}


function resetGame() {
    round = 1;
    let resetParas = document.querySelectorAll(".result p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    user_num.disabled = false;
    enter.disabled = false;
    guess_num.value = "";
    confirm_num = Math.floor(Math.random() * 100) + 1;
    console.log(confirm_num);
    n1 = 1;
    n2 = 100;
    guess_num.setAttribute("min", n1);
    guess_num.setAttribute("max", n2);
}


