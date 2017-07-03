import { Game } from './game'

describe('board', () => {
  let game
  let board
  beforeEach(() => {
    game = new Game()
    board = game.board
  })

  it('has 3x3 dimensions', () => {
    expect(board).toHaveLength(3)
    board.forEach((row) => expect(row).toHaveLength(3))
  })

  describe('board.place(x,y)', () => {
    it('should place pieces on board', () => {
      game.place(0,0)
      expect(board[0][0]).toEqual("x")
    })

    it('should not let you place in the same spot twice', () => {
      game.place(0,0)
      expect(game.xTurn).toBe(false)
      game.place(0,0)
      expect(game.xTurn).toBe(false)
      expect(board[0][0]).toEqual("x")
    })

    it('should not allow consecutive plays', () => {
      game.place(0,0)
      const before = game.board[0][0]
      game.place(0,1)
      expect(board[0][1]).not.toEqual(before)
    })
  })

  describe('board.checkThree(x,y,z)', () => {
    it('should return false if a null value is passed', () => {
      expect(game.checkThree('x', null, 'x')).toBe(false)
    })

    it('should return true if all three are equal', () => {
      expect(game.checkThree('x', 'x', 'x')).toBe(true)
    })
  })

  describe('board.isOver()', () => {
    it('should declare a winner when someone won diagonal', () => {
      game.board[0][0] = 'x'
      game.board[1][1] = 'x'
      game.board[2][2] = 'x'
      expect(game.isOver()).toBe(true)
    })

    describe('should declare a winner when someone won horizontal', () => {
      it('row 1', () => {
        game.board[0][0] = 'o'
        game.board[1][0] = 'o'
        game.board[2][0] = 'o'
        expect(game.isOver()).toBe(true)
      })

      it('row 2', () => {
        game.board[0][1] = 'o'
        game.board[1][1] = 'o'
        game.board[2][1] = 'o'
        expect(game.isOver()).toBe(true)
      })

      it('row 3', () => {
        game.board[0][2] = 'o'
        game.board[1][2] = 'o'
        game.board[2][2] = 'o'
        expect(game.isOver()).toBe(true)
      })
    })

    describe('should declare a winner when someone won veritcally', () => {
      it('column 1', () => {
        game.board[0][0] = 'x'
        game.board[0][1] = 'x'
        game.board[0][2] = 'x'
        expect(game.isOver()).toBe(true)
      })
      it('column 2', () => {
        game.board[0][0] = 'x'
        game.board[0][1] = 'x'
        game.board[0][2] = 'x'
        expect(game.isOver()).toBe(true)
      })
      it('column 3', () => {
        game.board[0][0] = 'x'
        game.board[0][1] = 'x'
        game.board[0][2] = 'x'
        expect(game.isOver()).toBe(true)
      })
    })
  })

  describe('board.lastPlacer()', () => {
    it('should return last player to place', () => {
      game.place(0,0)
      expect(game.lastPlacer()).toBe('x')
    })
  })
})
