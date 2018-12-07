
document.querySelector('.new-game-btn').addEventListener('click', resetGame); 
document.querySelector('.wheel-btn').addEventListener('click', showSpinValue);
const spinValue = document.querySelector('.current-spin-value');
let game;
let puzzle;

let domUpdates = {

  startGame() {
    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hidden');
    populatePlayerNames()
  },
  
  resetGame() {

  },
  
  populatePlayerNames() {
    const player1Name = document.querySelector('.player1-name');
    const player2Name = document.querySelector('.player2-name');
    const player3Name = document.querySelector('.player3-name');
    const player1 = document.querySelector('.player1-name-input');
    const player2 = document.querySelector('.player2-name-input');
    const player3 = document.querySelector('.player3-name-input');
    player1Name.innerText = player1.value;
    player2Name.innerText = player2.value;
    player3Name.innerText = player3.value;
  },


  showSpinValue() {
    spinValue.innerText = 10;
  },

};

const guessLetterInput = document.querySelector('.letter-guess-input');
const letterGuessSubmitButton = document.querySelector('.letter-guess-submit-btn');
letterGuessSubmitButton.addEventListener('click', showLetterGuessed);
const letterA = document.querySelector('.letter-a');
const letterB = document.querySelector('.letter-b');
const letterC = document.querySelector('.letter-c');
const letterD = document.querySelector('.letter-d');
const letterE = document.querySelector('.letter-e');
const letterF = document.querySelector('.letter-f');
const letterG = document.querySelector('.letter-g');
const letterH = document.querySelector('.letter-h');
const letterI = document.querySelector('.letter-i');
const letterJ = document.querySelector('.letter-j');
const letterK = document.querySelector('.letter-k');
const letterL = document.querySelector('.letter-l');
const letterM = document.querySelector('.letter-m');
const letterN = document.querySelector('.letter-n');
const letterO = document.querySelector('.letter-o');
const letterP = document.querySelector('.letter-p');
const letterQ = document.querySelector('.letter-q');
const letterR = document.querySelector('.letter-r');
const letterS = document.querySelector('.letter-s');
const letterT = document.querySelector('.letter-t');
const letterU = document.querySelector('.letter-u');
const letterV = document.querySelector('.letter-v');
const letterW = document.querySelector('.letter-w');
const letterX = document.querySelector('.letter-x');
const letterY = document.querySelector('.letter-y');
const letterZ = document.querySelector('.letter-z');

function showLetterGuessed(e) {
  e.preventDefault();
  if(guessLetterInput.value.toLowerCase() === "a") {
    letterA.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "b") {
    letterB.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "c") {
    letterC.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "d") {
    letterD.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "e") {
    letterE.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "f") {
    letterF.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "g") {
    letterG.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "h") {
    letterH.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "i") {
    letterI.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "j") {
    letterJ.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "k") {
    letterK.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "l") {
    letterL.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "m") {
    letterM.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "n") {
    letterN.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "o") {
    letterO.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "p") {
    letterP.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "q") {
    letterQ.classList.add('grey-font');
  }
};
