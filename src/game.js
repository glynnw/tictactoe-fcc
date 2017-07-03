class Game {
  constructor() {
    this.xTurn = true
    this.board = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]
  }

  place(x, y) {
    if(this.board[x][y] === null) {
      if(this.xTurn) {
        this.board[x][y] = 'x'
        this.xTurn = !this.xTurn
      } else {
        this.board[x][y] = 'o'
        this.xTurn = !this.xTurn
      }
    }
  }

  isOver() {
    let result = null

    // Check diagonally
    if (this.checkThree(this.board[0][0], this.board[1][1], this.board[2][2]))
      return true

    // Check columns
    for (let x = 0; x < this.board.length; x++)
      if (this.checkThree(this.board[x][0], this.board[x][1], this.board[x][2]))
        return true

    // Check rows
    for (let y = 0; y < this.board.length; y++)
      if (this.checkThree(this.board[0][y], this.board[1][y], this.board[2][y]))
        return true

    return false
  }

  checkThree(x, y, z) {
    if(x === null) // make sure not three nulls
      return false
    return x === y && x === z
  }

  lastPlacer() {
    return this.xTurn ? 'o' : 'x'
  }
}

export { Game }
