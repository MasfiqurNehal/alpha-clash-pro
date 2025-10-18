// amra simple vabe korlam without function
// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }
function handleKeyboardButton(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

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
    const newLife = currentLife - 1;

    // 3. show the Life
    currentLifeElement.innerText = newLife;
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
