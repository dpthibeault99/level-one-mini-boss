export class Ball {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

        this.radius = 50;
        this.color = "#6c14ba";

        this.speedX = 0;
        this.speedY = 0;
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    moveBall() {
         this.speedX = 5;
         this.speedY = 5;
     }
  

    update() {
        this.x += this.speedX; // having both
        this.y += this.speedY; // moves diagnally

        // also this is an infinte loop
        if (this.x + this.radius > this.canvas.width) { // right side
            this.x = this.canvas.width - this.radius;
            this.speedX = -5; //'-' moves left ' ' moves
        }
        if(this.x - this.radius < 0){ // left side
            this.speedX = 5;
        }
        if (this.y + this.radius > this.canvas.height){ // bottom
            this.y = this.canvas.height - this.radius;
            this.speedY = -5;
            this.speedX = -5;
        }
    //     if (this.y + this.radius < this.canvas.height){ // top
    //         this.y = this.canvas.height + this.radius;
    //         this.speedY = 5;
    //         this.speedX = 5;
    // }
}
}