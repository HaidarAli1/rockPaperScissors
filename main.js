function getComputerChoice() {
       let choice = Math.floor(Math.random() * 3) + 1;

       if (choice == 1) {
            return "rock";
       } else if (choice == 2) {
            return "paper";
       }else if (choice == 3) {
            return "scissors"
       }else {
            return undefined;
       }
}

function playerChoice() {
    choice = prompt("What do you choose? Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();

    if (viableAnswer(choice) == true) {
        return choice;
    }

    return playerChoice();
}

function viableAnswer(playerInput) {

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return true;
    } else {
        alert("The input recieved is invalid, you'll have to re enter your answer.");
        return false;
    }
    
}

function round() {
    let compInput = getComputerChoice();
    let playerInput = playerChoice();
    let winnerValue = 0;

    //Winner Value is 1 if Player wins, and 2 in computer wins, 0 for tie.

    switch(compInput) {
        case "rock":
            if (playerInput === "paper") {
                winnerValue = 1;
                consoleStatement(compInput, playerInput, winnerValue);
            } else if (playerInput === "scissors") {
                winnerValue = 2;
                consoleStatement(compInput, playerInput, winnerValue);
            } else {
                consoleStatement(compInput, playerInput, winnerValue);
            }
            return winnerValue;

        case "paper":
            if (playerInput === "scissors") {
                winnerValue = 1;
                consoleStatement(compInput, playerInput, winnerValue);
            } else if (playerInput === "rock") {
                winnerValue = 2;
                consoleStatement(compInput, playerInput, winnerValue);
            } else {
                consoleStatement(compInput, playerInput, winnerValue);
            }
            return winnerValue;

        case "scissors":
            if (playerInput === "rock") {
                winnerValue = 1;
                consoleStatement(compInput, playerInput, winnerValue);
            } else if (playerInput === "paper") {
                winnerValue = 2;
                consoleStatement(compInput, playerInput, winnerValue);
            } else {
                consoleStatement(compInput, playerInput, winnerValue);
            }
            return winnerValue;
    }       
}

function consoleStatement (compInput, playerInput, winnerValue) {
    //Winner Value is 1 if Player wins, and 2 in computer wins, 0 for tie.
    if (winnerValue == 0){
        return console.log(`It's a Tie! Computer choose ${compInput}. You choose ${playerInput}`);
    } else if (winnerValue == 1) {
        return console.log(`You won! Computer choose ${compInput}. You choose ${playerInput}.`);
    } else if (winnerValue == 2) {
        return console.log(`You Lost! Computer choose ${compInput}. You choose ${playerInput}.`);
    }else {
        return console.log(`Error, winnerValue is not a designated value ${winnerValue}.`)
    }
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    let winnerValue = 0;

    while (compScore != 3 || playerScore != 3) {
        winnerValue  = round();
        
        if (winnerValue == 1) {
            playerScore = playerScore++;
        } else if (winnerValue == 2) {
            compScore = compScore++;
        }
    }

    if (compScore == 3) {
        console.log(`You lost. The computer won with a score of ${compScore}, and you lost with a score of ${playerScore}.`);
    } else if (playerScore == 3) {
        console.log(`You won! You had a score of ${playerScore}. The computer had a score of ${compScore}`);
    }

}

console.log(round());