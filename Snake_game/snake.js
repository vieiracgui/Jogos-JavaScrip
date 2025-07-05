
//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snack head
var snakeX = blocksize * 5; //initial position of snake head
var snakeY = blocksize * 5; //initial position of snake head

var velocityX = 0; //horizontal velocity
var velocityY = 0; //vertical velocity

var snakeBody = []

//food
var foodX = blocksize * 10;
var foodY = blocksize * 10;

var gameOver = false; //game over flag


window.onload = function() {
    board =document.getElementById("board");
    board.width = rows * blocksize;
    board.height = cols * blocksize;
    context = board.getContext("2d"); //used to draw on the canvas
    
    placeFood(); //place food at random position
    document.addEventListener("keyup",changeDirection); //listen for key presses
    // update ();
    setInterval(update, 1000/10);
}


function update() {
    if (gameOver) { //if game is over
        return;
     }
    context.fillStyle="#1A0033";
    context.fillRect(0, 0, board.width, board.height); //fill the

    context.fillStyle = "#FF00FF";
    context.fillRect(foodX, foodY, blocksize, blocksize); //draw food

    if (snakeX == foodX && snakeY == foodY) { //if snake head is at the same position as food
        snakeBody.push([foodX, foodY]); //add food position to snake body
        placeFood(); //place food at a new random position
        
    }
    for (let i = snakeBody.length - 1; i > 0; i--) { //move the body of the snake
        snakeBody[i] = snakeBody[i - 1]; //set the position of the current body segment to the position of the previous segment
    }

    if (snakeBody.length) { //if snake body is not empty
        snakeBody[0] = [snakeX, snakeY]; //set the position of the first body segment to the position of the snake head
    }

    context.fillStyle = "#00FFFF";
    snakeX += velocityX * blocksize;
    snakeY  += velocityY * blocksize;//draw
    context.fillRect(snakeX, snakeY, blocksize, blocksize); //draw snake head
    for (let i = 0; i < snakeBody.length; i++) { //draw snake body
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }
    //game over conditions
    if (
        snakeX < 0 ||
        snakeX >= cols * blocksize ||
        snakeY < 0 ||
        snakeY >= rows * blocksize
    ) { //if snake head is out of bounds
        gameOver = true; //set game over flag to true
        context.fillStyle = "#FF0000"; //set color to red
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) { //if up arrow is pressed and snake is not moving down
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) { //if down arrow is pressed and snake is not moving up
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) { //if left arrow is pressed and snake is not moving right
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight"&& velocityX != -1) { //if right arrow is pressed and snake is not moving left
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    //0-1) *cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blocksize;
    foodY = Math.floor(Math.random() * rows) * blocksize;

}