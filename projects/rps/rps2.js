var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");

var rng = Math.random();
var computerChoice = "R";

if(rng < 0.66) {
    computerChoice = "P";
} else if (rng < 0.33) {
    computerChoice = "S";

}


var userWins = "You WIN!";
var computerWins = "The computer wins!";

if(computerChoice !== userChoice){
    if(computerChoice === "R" && userChoice === "S"){
      alert(computerWins);
    }
    //we need to re check our if statements so the comparisons happen in one set of parenthesis- not
    //as all different branches in an if tree
    //because as it reads down the tree you made
    //it doesn't understand the previous brances it took.
        if (userChoice === "S") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    } else if (computerChoice === "P") {
        if( userChoice === "R") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    } else {
        if( userChoice === "P") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    }
} else {
    alert('Tie!');
}

var userWins = "You win!";
var computerWins = "The computer wins!";
var roundCounter = 2;

var gameRound = function(){
    var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
    var computerChoice = "R";
    var rng = Math.random();

    if(rng > 0.66) {
        computerChoice = "P";
    } else if (rng > 0.33) {
        computerChoice = "S";
    }

    if(computerChoice !== userChoice){
        if(computerChoice === "R"){
            if (userChoice === "S") {
                alert(computerWins);
            } else {
                alert(userWins);
            }
        } else if (computerChoice === "P") {
            if( userChoice === "R") {
                alert(computerWins);
            } else {
                alert(userWins);
            }
        } else {
            if( userChoice === "P") {
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
    } else {
        alert('Tie!');
    }
};

while (roundCounter < 4) {
    gameRound();
    roundCounter++;
}
