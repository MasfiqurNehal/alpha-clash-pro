function handleKeyboardButton(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

  // stop the game if pressed 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }

  //   get the expected to press
  const currentAlphabetElement = document.getElementById("show-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(currentAlphabetElement.innerText);

  //   checked matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");
    // update score
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // 2. increase the score
    const newScore = currentScore + 1;

    // 3. show the score
    currentScoreElement.innerText = newScore;

    // show the new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // console.log("Your Score is: ", score);
    // update Life Line
    // 1. get the current life line
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    // 2. Reduce the Life
    const updateLife = currentLife - 1;

    // 3. show the Life
    currentLifeElement.innerText = updateLife;
    if (updateLife === -1) {
      gameOver();
    }
  }
}

// capture kayboard key press
document.addEventListener("keyup", handleKeyboardButton);

function continueGame() {
  const alphabet = getARandomAlphabet();

  // set random generated alphabet to the screen
  const showAlphabet = document.getElementById("show-alphabet");
  showAlphabet.innerText = alphabet;

  //   set background color
  setBackgroundColorById(alphabet);
}

// function deya korlam, jehetu akoi kaj bar bar kortace tai utility ta korlam
function play() {
  hideElementbyId("home-screen");
  showElementbyId("play-ground");
  continueGame();
}

// game over function and go to the score pages
function gameOver() {
  hideElementbyId("play-ground");
  showElementbyId("score-Page");
  const lastScore = document.getElementById("current-score");
  const lastScoreWas = lastScore.innerText;
  setElementValues("final-scoreShow", lastScoreWas);
}

function playAgain() {
  hideElementbyId("score-Page");
  showElementbyId("play-ground");
  setElementValues("current-score", 0);
  setElementValues("current-life", 5);
}
