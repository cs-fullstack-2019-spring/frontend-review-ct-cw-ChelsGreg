var gameSpaces = document.querySelectorAll('td');
var restartGame = document.querySelector('button');
var current_player = 1;


//Handler for clicks
function clickedSquare(e) {
    console.log("clicksquare");
    if (current_player === 1 && e.target.innerHTML === "") {
        e.target.innerHTML = "X";
        current_player = 2;
    } else if (e.target.innerHTML === "") {
        e.target.innerHTML = "O";
        current_player = 1;
    }

    winnerCheck();

    gameTie();
}


// Add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}


// Check for winner
function winnerCheck() {
    for (var i = 0; i < gameSpaces.length; i++) {
        if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "X")
            || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "X")
            || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
            || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")
            || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "X")
            || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
            || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
            || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")) {
            alert("X is the Winner!");
            return false;
        } else if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "O")
            || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "O")
            || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
            || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")
            || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "O")
            || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
            || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
            || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")) {
            alert("O is the Winner!");
            return false;
        }

    }


}


function gameTie() {
    console.log("gametie");
    var alertTie = true;
    for (var i = 0; i < gameSpaces.length; i++)

    if (gameSpaces[i].innerHTML === "") {
        alertTie = false;
    }
    if (alertTie === true) {
        alert("TIE!");
    }
}


// Add a New Game button that when clicked, will clear the game area and start a new game.

function restartFunction() {
    for (var i = 0; i < gameSpaces.length; i++) {
        gameSpaces[i].textContent = "";
    }
}


restartGame.onclick = restartFunction;

