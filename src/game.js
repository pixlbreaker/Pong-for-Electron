
// Elements from the HTML
const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext("2d");

// Positions
let player_x = 20;
let player_y = 20;
let ball_x = 200;
let ball_y = 200;
let ball_vx = 1;
let ball_vy = 1;

document.addEventListener("keydown", event => {

    // Switch case based on the key
    switch (event.key) {
        case "s":
            console.log("Down");
            player_y += 5; //updates location
            break;
        case "w":
            console.log("Up");
            player_y -= 5;
            break;
        default:
            break;
    }
});

// Create the players
ctx.fillRect(player_x, player_y, 10, 50);
ctx.fillRect(ball_x, ball_y, 10, 10);

// Draws items
function draw(){

    // Clears the entire board
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // Draws the player
    ctx.fillRect(player_x, player_y, 10, 50);

    // Draws the ball
    ball_x += ball_vx;
    ball_y += ball_vy;
    ctx.fillRect(ball_x, ball_y, 10, 10);
    console.log(ball_x);
    console.log(ball_y);
}

// Interval for the drawing loop
setInterval(draw, 1000/60);
