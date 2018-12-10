class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round = 1;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.bonusRound = false;
    this.turn = 0;
    this.currentPlayer = this.players[this.turn];
  }

  resetGame() {
    // keeps player names
    // resets score and grand total
    // resets game to round 1
    // erases letters guessed
    // erases spin value
  }

  quitGame() {
    this.players = [];
    this.round = 1;
    this.fivePuzzles = [];
    this.wheel = [];
    this.bonusRound = false;
    this.turn = 0;
  }


  guessLetter() {
    domUpdates.handleConsonantGuessed();
  }

  changeTurn() {
    this.turn++;
    if(this.turn === this.players.length) {
      this.turn = 0;
    }
    this.currentPlayer = this.players[this.turn];
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
