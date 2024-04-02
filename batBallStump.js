let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        lost: 0,
        win: 0,
        tie: 0,
      };
  score.displayScore = function () {
    return `Score: won: ${score.win} lost:${score.lost} tie:${score.tie}`;
  };
  showResult();
}

const genrateComputerChoice = () => {
  let randomNum = Math.random() * 3;

  if (randomNum > 0 && randomNum < 1) {
    return "Bat";
  } else if (randomNum > 1 && randomNum < 2) {
    return "Ball";
  } else {
    return "Stump";
  }
};
const getResult = (userMove, computerMove) => {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User Won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer Won";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return `Computer has Won`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "User Won";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return `Computer has Won`;
    } else if (computerMove === "Bat") {
      score.win++;
      return "User Won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie`;
    }
  }
};
function showResult(userMove, computerMove, result) {
  localStorage.setItem("Score", JSON.stringify(score));
  console.log(score);

  document.querySelector(".user-move").innerText = userMove
    ? `You have chosen ${userMove} `
    : "";

  document.querySelector(".comp-move").innerText = computerMove
    ? `Computer choice is ${computerMove}`
    : "";

  document.querySelector(".result").innerText = result
    ? `Result is ${result}`
    : "";

  document.querySelector(".score").innerText = ` Your ${score.displayScore()}`;
}
