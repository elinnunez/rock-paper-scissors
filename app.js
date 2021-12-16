const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");
const sb = document.querySelector(".scoreboard");
const result = document.querySelector(".result");
const final = document.querySelector(".final");
const container = document.querySelector(".container");
const rest = document.createElement("button");

rest.style.visibility = "hidden";
rest.style.display = "none";
container.classList.add("reset");
rest.textContent = "Restart Game";
container.appendChild(rest);

let playerWins = 0;
let compWins = 0;
let tie = 0;
// let gameCount = 0;

const computerPlay = () => {
  let arr = ["Rock", "Paper", "Scissors"];

  let chosen = arr[Math.floor(Math.random() * arr.length)];

  return chosen.toLowerCase();
};

const disableBtns = () => {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

const enableBtns = () => {
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
};

const playRound = (pS, cS) => {
  if (pS === "rock") {
    if (cS === "paper") {
      result.textContent = "You Lose! Paper beats Rock";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else if (cS === "scissors") {
      result.textContent = "You Win! Rock beats Scissors";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else {
      result.textContent = "It's a Tie! Both Players chose Rock";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
    }
  } else if (pS === "paper") {
    if (cS === "rock") {
      result.textContent = "You Win! Paper beats Rock";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else if (cS === "scissors") {
      result.textContent = "You Lose! Scissors beats Paper";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else {
      result.textContent = "It's a Tie! Both Players chose Paper";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
    }
  } else if (pS == "scissors") {
    if (cS === "paper") {
      result.textContent = "You Win! Scissors beats Paper";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else if (cS === "scissors") {
      result.textContent = "You Lose! Scissors beats Paper";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else {
      result.textContent = "It's a Tie! Both Players chose Scissors";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
    }
  }

//   gameCount++;

  if (playerWins === 5 || compWins === 5) {

    sb.textContent = (
      "Final Score: Player: " + playerWins + " | Computer: " + compWins
    );
    if (playerWins > compWins) {
        sb.style.color = "green";
      final.textContent = "Player is the Grand Winner";
    } else if (compWins > playerWins) {
        sb.style.color = "red";
      final.textContent = "Computer is the Grand Winner";
    // } else {
    //   final.textContent = "No Grand Winner! Both Tied";
    }

    disableBtns();
    restart();
  }
};

const restart = () => {
  rest.style.visibility = "visible";
  rest.style.display = "inline-block";
  rest.addEventListener("click", () => {
    gameCount = 0;
    playerWins = 0;
    compWins = 0;
    tie = 0;
    result.textContent = "First to 5 Wins";
    sb.textContent = "Player: 0 | Computer: 0";
    final.textContent = "";
    rest.style.visibility = "hidden";
    rest.style.display = "none";
    sb.style.color = "black";
    enableBtns();
  });
};

function main() {
  paperBtn.addEventListener("click", (e) => {
    playRound("paper", computerPlay());
  });

  rockBtn.addEventListener("click", (e) => {
    playRound("rock", computerPlay());
  });

  scissorsBtn.addEventListener("click", (e) => {
    playRound("scissors", computerPlay());
  });
}

main();
