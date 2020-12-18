
// Elements from the HTML
const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext("2d");

// Width and Height constants
const WIDTH = 800;
const HEIGHT = 600;

// Positions
let player_x = 20;
let player_y = HEIGHT/2;

// Ball Positions
let ball_x = WIDTH/2;
let ball_y = HEIGHT/2;
let ball_vx = 1;
let ball_vy = 1;

// AI Positions
let ai_x = WIDTH -20;
let ai_y = HEIGHT/2;

// Score
let pscore = 0;
let cscore = 0;

document.addEventListener("keydown", event => {
    // Switch case based on the key
    switch (event.key) {
        case "s":
            console.log("Down");
            if (player_y + 50 < HEIGHT){
                player_y += 5; //updates location
            }
            break;
        case "w":
            console.log("Up");
            if (player_y > 0){
                player_y -= 5;
            }
            break;
        default:
            break;
    }
});

// Create the players
ctx.fillRect(player_x, player_y, 10, 50);
ctx.fillRect(ai_x, ai_y, 10, 50);
ctx.fillRect(ball_x, ball_y, 10, 10);

function resetGame(){

    // Displays the score
    console.log(`Score {$cscore}`);
    ball_x = WIDTH/2;
    ball_y = HEIGHT/2;
}


function update(){
    // Updates the ball position
    ball_x += ball_vx;
    ball_y += ball_vy;

    // Checks if it hits the player
    if ((ball_x == (player_x + 10)) 
        && (ball_y >= player_y) 
        && (ball_y <= (player_y + 50))){
        ball_vx = ball_vx * -1;
    }

    // Checks if it hits the AI
    if ((ball_x == (ai_x + 10)) 
        && (ball_y >= ai_y) 
        && (ball_y <= (ai_y + 50))){
        ball_vx = ball_vx * -1;
    }

    // Checks the borders for the ball
    if (ball_x == WIDTH){
        ball_vx = -1;
        resetGame();
    } else if(ball_x == 0){
        cscore += 1;
        resetGame();
    }

    // Checks the Y borders
    if (ball_y == HEIGHT){
        ball_vy = -1;
    } else if(ball_y == 0){
        ball_vy = 1;
    }

    // Updates the AI
    if (ai_y < ball_y && (ai_y + 50 ) < HEIGHT ){
        ai_y += 1;
    } else if (ai_y > ball_y){
        ai_y -= 1;
    }

    // Runs the draw function
    draw();
}

// Draws items
function draw(){

    // Clears the entire board
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // Draws the player
    ctx.fillRect(player_x, player_y, 10, 50);

    // Draws the AI
    ctx.fillRect(ai_x, ai_y, 10, 50);

    // Draws the ball
    ctx.fillRect(ball_x, ball_y, 10, 10);
}

// Interval for the drawing loop
setInterval(update, 1000/60);
