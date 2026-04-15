import { Ball } from "./ball.js";

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let ball = new Ball(canvas, context);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    ball.drawBall();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        ball.moveBall();
    }
});
