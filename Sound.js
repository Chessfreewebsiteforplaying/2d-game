const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const hitSound = document.getElementById('hitSound');
const collisionSound = document.getElementById('collisionSound');

// Hàm để phát âm thanh tấn công
function playHitSound() {
    hitSound.currentTime = 0; // Đặt thời gian phát lại từ đầu
    hitSound.play(); // Phát âm thanh tấn công
}

// Hàm để phát âm thanh va chạm
function playCollisionSound() {
    collisionSound.currentTime = 0; // Đặt thời gian phát lại từ đầu
    collisionSound.play(); // Phát âm thanh va chạm
}

// Vẽ một hình chữ nhật đơn giản
function drawRectangle() {
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
}

// Hàm để xử lý sự kiện nhấn phím
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        playHitSound(); // Phát âm thanh tấn công
        drawRectangle(); // Vẽ hình chữ nhật
    } else if (event.key === 'c') {
        playCollisionSound(); // Phát âm thanh va chạm
    }
});

// Vẽ màn hình ban đầu
drawRectangle();
