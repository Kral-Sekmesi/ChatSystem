const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

// Paddle
const paddleWidth = 10,
    paddleHeight = 100;

const player = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#FFF"
};

const chatInput = document.getElementById("chat-input");
const chatButton = document.getElementById("chat-button");

// Chat functionality
function sendChatMessage() {
    const message = chatInput.value;
    // Send the message to the chat server (you need to implement this part)
    console.log("Sending chat message:", message);
    chatInput.value = "";
}

chatButton.addEventListener("click", sendChatMessage);

// Rendering
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function render() {
    // Clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, "#000");

    // Draw the paddles
    drawRect(player.x, player.y, player.width, player.height, player.color);

    requestAnimationFrame(render);
}

render();