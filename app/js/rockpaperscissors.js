////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/*'use strict';*/

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null) {
        move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null) {
        move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (
        (playerMove == 'rock' && computerMove == 'scissors')  ||
        (playerMove == 'scissors' && computerMove == 'paper') ||
        (playerMove == 'paper' && computerMove == 'rock')
        ) {
        winner = 'player';
    }
    if (
        (computerMove == 'rock' && playerMove == 'scissors')  ||
        (computerMove == 'scissors' && playerMove == 'paper') ||
        (computerMove == 'paper' && playerMove == 'rock')
        ) {
        winner = 'computer';
    }
    if (playerMove == computerMove){
        winner = 'tie';
    }
    alert('you chose ' + playerMove + '\ncomputer chose ' + computerMove);
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5 ) {
        var win = getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()));
        if (win == 'player') { 
            playerWins += 1;
            alert('player wins\nPlayer:' + playerWins + '\nComputer:' + computerWins);
        }
        if (win == 'computer') { 
            computerWins += 1;
            alert('computer wins\nPlayer:' + playerWins + '\nComputer:' + computerWins);
        }
        if (win == 'tie') {
            alert('tie game\nPlayer:' + playerWins + '\nComputer:' + computerWins);
        }
    }
    console.log([playerWins,computerWins]);
}