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

console.log(playerChoice());