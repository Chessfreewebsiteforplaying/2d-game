
// script.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Vẽ nhân vật, đối thủ, v.v.
}

function update() {
    // Cập nhật trạng thái game
    draw();
    requestAnimationFrame(update);
}

update();
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const hitSound = document.getElementById('hitSound');
const collisionSound = document.getElementById('collisionSound');

// Admin flag
let isAdmin = false; // Set this to true if you want to grant admin power

// Function to grant admin power (for testing purposes)
function grantAdminPower() {
    isAdmin = true;
    console.log("Admin power granted!");
}

// Function to draw a rectangle
function drawRectangle() {
    ctx.fillStyle = isAdmin ? 'gold' : 'red'; // Change color if admin
    ctx.fillRect(50, 50, 100, 100);
}

// Function to play hit sound
function playHitSound() {
    hitSound.currentTime = 0; // Reset to start
    hitSound.play(); // Play sound
}

// Keydown event listener
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        playHitSound(); // Play hit sound
        drawRectangle(); // Draw rectangle
    } else if (event.key === 'c') {
        collisionSound.currentTime = 0; // Reset to start
        collisionSound.play(); // Play collision sound
    } else if (event.key === 'g') {
        grantAdminPower(); // Grant admin power when 'g' is pressed
    }
});

// Initial drawing
drawRectangle();
