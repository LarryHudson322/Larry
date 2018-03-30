document.getElementById("b1").onclick = showRock;
document.getElementById("b2").onclick = showPaper;
document.getElementById("b3").onclick = showScissors;

var yourScore = 0;
var theirScore = 0;
var timeOut = false;

function showRock() {
  if(!timeOut) {
    show(document.getElementById("yourRock"));
  }
}

function showPaper() {
  if(!timeOut) {
   show(document.getElementById("yourPaper"));
  }
}

function showScissors() {
  if(!timeOut) {
    show(document.getElementById("yourScissors"));
  }
}

function show(x) {
  var computerChoices = [document.getElementById("otherRock"), document.getElementById("otherPaper"), document.getElementById("otherScissors")];
  x.classList.remove("hidden");
  var randomNum = Math.floor(Math.random()*3);
  var computerChoice = computerChoices[randomNum];
  computerChoice.classList.remove("hidden");
  var won = false;
  var tie = false;
  if (x.classList.contains("rock")) {
    if (randomNum == 0) {
      tie = true;
      won = false;
    } else if (randomNum == 1) {
      tie = false;
      won = false;
      theirScore++;
    } else {
      tie = false;
      won = true;
      yourScore++;
    }
  } else if (x.classList.contains("paper")) {
    if (randomNum == 0) {
      tie = false;
      won = true;
      yourScore++;
    } else if (randomNum == 1) {
      tie = true;
      won = false;
    } else {
      tie = false;
      won = false;
      theirScore++;
    }
  } else {
    if (randomNum == 0) {
      tie = false;
      won = false;
      theirScore++;
    } else if (randomNum == 1) {
      tie = false;
      won = true;
      yourScore++;
    } else {
      tie = true;
      won = false;
    }
  }

  update(won, tie);

  setTimeout(function() {
    x.classList.add("hidden");
    computerChoice.classList.add("hidden");
    document.getElementById("result").innerHTML = "";
    timeOut = false;
  }, 4000);
}

function update(won, tie) {
  var message = "";
  if (tie) {
    message = "It was a tie."
  } else if (won) {
    message = "You won!"
  } else {
    message = "You lost..."
  }
  document.getElementById("result").innerHTML = message;
  document.getElementById("theirScore").innerHTML = "The computer: " + theirScore;
  document.getElementById("yourScore").innerHTML = "You: " + yourScore;
  timeOut = true;
}
