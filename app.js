const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");
const sb = document.querySelector(".scoreboard");
const result = document.querySelector(".result");
const final = document.querySelector(".final");
const container = document.querySelector(".container");
const rest = document.createElement("button");

const plc = document.querySelector(".plc");
// plc.innerHTML = `<img src="https://img.icons8.com/fluency/${200}/000000/barber-scissors.png"/><p>Scissors</p></button>`;
const coc = document.querySelector(".coc");

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

  if(chosen == arr[0]) {
    coc.innerHTML = `<img src="https://img.icons8.com/fluency/200/000000/rock.png"/><p>Rock</p>`;
  } else if (chosen == arr[1]) {
    coc.innerHTML = `<img src="https://img.icons8.com/external-itim2101-flat-itim2101/${200}/000000/external-paper-school-stationery-itim2101-flat-itim2101.png"/><p>Paper</p></button>`;
  } else if (chosen == arr[2]) {
    coc.innerHTML = `<img src="https://img.icons8.com/fluency/${200}/000000/barber-scissors.png"/><p>Scissors</p></button>`;
  }

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
      plc.style.color = "red";
      coc.style.color = "green";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else if (cS === "scissors") {
      result.textContent = "You Win! Rock beats Scissors";
      plc.style.color = "green";
      coc.style.color = "red";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
    } else {
      result.textContent = "It's a Tie! Both Players chose Rock";
      plc.style.color = "yellow";
      coc.style.color = "yellow";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
    }
  } else if (pS === "paper") {
    if (cS === "rock") {
      result.textContent = "You Win! Paper beats Rock";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "green";
      coc.style.color = "red";
    } else if (cS === "scissors") {
      result.textContent = "You Lose! Scissors beats Paper";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "red";
      coc.style.color = "green";
    } else {
      result.textContent = "It's a Tie! Both Players chose Paper";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "yellow";
      coc.style.color = "yellow";
    }
  } else if (pS == "scissors") {
    if (cS === "paper") {
      result.textContent = "You Win! Scissors beats Paper";
      playerWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "green";
      coc.style.color = "red";
    } else if (cS === "rock") {
      result.textContent = "You Lose! Rock beats Scissors";
      compWins++;
      sb.textContent = "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "red";
      coc.style.color = "green";
    } else {
      result.textContent = "It's a Tie! Both Players chose Scissors";
      tie++;
      sb.textContent =
        "Player: " + playerWins + " | Computer: " + compWins;
      plc.style.color = "yellow";
      coc.style.color = "yellow";
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
    coc.innerHTML = '<img src="https://img.icons8.com/fluency/225/000000/question-mark.png"/>'
    plc.innerHTML = `<img src="https://img.icons8.com/fluency/223/000000/question-mark.png"/>`;
    enableBtns();
  });
};

function main() {
  paperBtn.addEventListener("click", (e) => {
    plc.innerHTML = `<img src="https://img.icons8.com/external-itim2101-flat-itim2101/${200}/000000/external-paper-school-stationery-itim2101-flat-itim2101.png"/><p>Paper</p></button>`;
    playRound("paper", computerPlay());
  });

  rockBtn.addEventListener("click", (e) => {
    plc.innerHTML = `<img src="https://img.icons8.com/fluency/200/000000/rock.png"/><p>Rock</p>`;
    playRound("rock", computerPlay());
  });

  scissorsBtn.addEventListener("click", (e) => {
    plc.innerHTML = `<img src="https://img.icons8.com/fluency/${200}/000000/barber-scissors.png"/><p>Scissors</p></button>`
    playRound("scissors", computerPlay());
  });
}

main();
