class GuessingGame {
  constructor() { }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.average = Math.round(((this.max - this.min) / 2) + this.min);
    return this.average;
  }

  lower() {
    this.max = this.average;
  }

  greater() {
    this.min = this.average;
  }
}

module.exports = GuessingGame;