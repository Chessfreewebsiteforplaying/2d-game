
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
