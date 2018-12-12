class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round = 0;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.bonusRound = false;
    this.turn = 0;
    this.currentPlayer = this.players[this.turn];
    this.guessedLetters = [];
  }

  resetGame() {
    // keeps player names
    this.round = 0;
    this.bonusRound = false;
    this.turn = 0;
    this.players[0].grandTotal = 0;
    this.players[1].grandTotal = 0;
    this.players[2].grandTotal = 0;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.showGrandTotalScore();
    domUpdates.showRoundNumber();
    this.guessedLetters = [];
    this.wheel[0].currentSpinValue = 0;
  }

  quitGame() {
    this.round = 0;
    this.fivePuzzles = [];
    this.wheel = [];
    this.bonusRound = false;
    this.turn = 0;
    this.players[0].grandTotal = 0;
    this.players[1].grandTotal = 0;
    this.players[2].grandTotal = 0;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.showRoundNumber();
    domUpdates.showGrandTotalScore();
  }

  correctGuess(letter) {
    return this.getCurrentPuzzle().answer.includes(letter);
  }

  handleConsonantGuessed() {
    let letterGuessInput = document.querySelector('.consonant-guess-input').value.toUpperCase();
    if (this.correctGuess(letterGuessInput)) {
      console.log("You got it!")
      this.currentPlayer.increaseCurrentPlayerScore();
      this.guessedLetters.push(letterGuessInput);
      this.isPuzzleFinished();
      if (this.getCurrentPuzzle().puzzleCompleted) {
        this.changeRound();
      }
      //update DOM with that letter
      //give points value to current player
      //they spin again or solve puzzle
    } else {
      console.log("WRONG!")
      //They dont get any points 
      this.changeTurn();
      //change turn to next player
    }
  }

  handleVowelGuessed() {
    let vowelGuessInput = document.querySelector('.vowel-guess-input').value.toUpperCase();
    if (this.correctGuess(vowelGuessInput)) {
      console.log("You got it the vowel right!");
      this.currentPlayer.decreaseCurrentPlayerScore();
      this.guessedLetters.push(vowelGuessInput);
      this.isPuzzleFinished();
      if (this.getCurrentPuzzle().puzzleCompleted) {
        this.changeRound();
      }
      //update DOM with that letter
      //they spin again or solve puzzle
    } else {
      console.log("WRONG VOWEL!")
      this.currentPlayer.decreaseCurrentPlayerScore();
      //They dont get any points 
      this.changeTurn();
      //change turn to next player
    }
  }

  getCurrentPuzzle() {
    return this.fivePuzzles[this.round]
  }

  changeRound() {
    this.round++;
    domUpdates.resetDefaultGreenBoxes();
    domUpdates.showGrandTotalScore();
    domUpdates.showCurrentPuzzle();
    if (this.round === 4) {
      this.bonusRound = true;
      let bonuswheel = new BonusWheel();
    }
    domUpdates.showRoundNumber();
    if (this.round === 5) {
      this.round = 0;
      this.quitGame();
    }
  }

  isPuzzleFinished() {
    let numberOfMatchedLetters = this.getCurrentPuzzle().answer.reduce((sum, currentLetter) => {
      if (this.guessedLetters.includes(currentLetter)) {
        sum++
      }
      return sum;
    }, 0)
    if (numberOfMatchedLetters === this.getCurrentPuzzle().answer.length) {
      this.getCurrentPuzzle().puzzleCompleted = true;
      domUpdates.showPuzzleCategory();
    }
  }

  guessPuzzleAnswer() {
    const puzzleGuessInput = document.querySelector('.solvepuzzle-guess-input').value.toUpperCase();
    if (puzzleGuessInput == this.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase()) {
      //needs to add score to currentPlayer's grand total
      alert('You got the right answer')
      this.changeRound(); 
    } else {
      alert('You got the WRONG answer')
    }
    // domUpdates.guessPuzzle()
  }

  changeTurn() {
    this.turn++;
    if (this.turn === this.players.length) {
      this.turn = 0;
    }
    this.currentPlayer = this.players[this.turn]
    domUpdates.showPlayersTurn();;
  }

  generateWheel() {
    const wheelOne = new Wheel();
    return [wheelOne]
  }

  generateFivePuzzles() {
    const roundOne = new Puzzle(1);
    const roundTwo = new Puzzle(2);
    const roundThree = new Puzzle(3);
    const roundFour = new Puzzle(4);
    const roundBonus = new Puzzle(5);
    return [roundOne, roundTwo, roundThree, roundFour, roundBonus]
  }

  createPlayers(player1, player2, player3) {
    const playerOne = new Player(player1);
    const playerTwo = new Player(player2);
    const playerThree = new Player(player3);
    return [playerOne, playerTwo, playerThree];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
