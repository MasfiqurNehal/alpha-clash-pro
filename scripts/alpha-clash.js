// amra simple vabe korlam without function
// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

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
