function hideElementbyId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementbyId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// add background color to the keyboard text
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
// remove background color to the keyboard text
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

// element value set when click play again button
function setElementValues(elementId, value) {
  element = document.getElementById(elementId);
  element.innerText = value;
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // get a random index between 0 to 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  alphabet = alphabets[index];
  return alphabet;
}
