document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const startBtn = document.querySelector('#start-button')
  const width = 10
  let nextRandom = 0
  let timerId
  let score = 0
  let gameOver = false

  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ]

  const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]

  const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ]

  const iTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4
  let currentRotation = 0

  let random = Math.floor(Math.random() * theTetrominoes.length)
  let current = theTetrominoes[random][currentRotation]

  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
    })
  }

  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
    })
  }

  function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
  }

  function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      checkRowComplete()
      currentPosition = 4
      currentRotation = 0
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      if (checkGameOver()) return
      draw()
      displayShape()
    }
  }

  function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if (!isAtLeftEdge) currentPosition -= 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1
    }
    draw()
  }

  function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -= 1
    }
    draw()
  }

  function rotate() {
    undraw()
    currentRotation++
    if (currentRotation === theTetrominoes[random].length) currentRotation = 0
    current = theTetrominoes[random][currentRotation]
    draw()
  }

  document.addEventListener('keydown', e => {
    if ([37, 38, 39, 40].includes(e.keyCode)) e.preventDefault()
    if (e.keyCode === 37) moveLeft()
    else if (e.keyCode === 38) rotate()
    else if (e.keyCode === 39) moveRight()
    else if (e.keyCode === 40) moveDown()
  })

  const displaySquares = document.querySelectorAll('.mini-grid div')
  const displayWidth = 4
  const displayIndex = 0
  const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2],
    [0, displayWidth, displayWidth+1, displayWidth*2+1],
    [1, displayWidth, displayWidth+1, displayWidth+2],
    [0, 1, displayWidth, displayWidth+1],
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]
  ]

  function displayShape() {
    displaySquares.forEach(square => square.classList.remove('tetromino'))
    upNextTetrominoes[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
    })
  }

  startBtn.addEventListener('click', () => {
    if (gameOver) {
      restartGame()
      return
    }
    if (timerId) {
      clearInterval(timerId)
      timerId = null
      startBtn.innerHTML = 'Start'
    } else {
      draw()
      timerId = setInterval(moveDown, 1000)
      displayShape()
      startBtn.innerHTML = 'Pause'
    }
  })

  function checkRowComplete() {
    for (let i = 0; i < 199; i += width) {
      const row = [...Array(width)].map((_, j) => i + j)
      if (row.every(index => squares[index].classList.contains('taken'))) {
        score += 100
        scoreDisplay.innerHTML = score
        row.forEach(index => {
          squares[index].classList.remove('taken')
          squares[index].classList.remove('tetromino')
        })
        const removed = squares.splice(i, width)
        squares = removed.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
        i -= width
      }
    }
  }

  function checkGameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      clearInterval(timerId)
      gameOver = true
      scoreDisplay.innerHTML = 'Game Over - Score: ' + score
      startBtn.innerHTML = 'Restart'
      return true
    }
    return false
  }

  function restartGame() {
    clearInterval(timerId)
    timerId = null
    gameOver = false
    score = 0
    scoreDisplay.innerHTML = score
    startBtn.innerHTML = 'Pause'
    squares.forEach(square => square.classList.remove('tetromino', 'taken'))
    displaySquares.forEach(square => square.classList.remove('tetromino'))
    currentPosition = 4
    currentRotation = 0
    random = Math.floor(Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    nextRandom = Math.floor(Math.random() * theTetrominoes.length)
    draw()
    displayShape()
    timerId = setInterval(moveDown, 1000)
  }
})
