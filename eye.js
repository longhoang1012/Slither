const Eye_Distance = 17;
const Eye_Angle = 0.9;

class eye {
    constructor(snake){
        this.snake = snake;
    }

    update(){

    }

    draw(){
        let eye1Pos = {
            x: this.snake.x + Math.cos(this.snake.angle - Eye_Angle) * Eye_Distance,
            y: this.snake.y + Math.sin(this.snake.angle - Eye_Angle) * Eye_Distance,
        }

        this.snake.game.screen.drawCircle(eye1Pos, 'eye');

        let eye2Pos = {
            x: this.snake.x + Math.cos(this.snake.angle + Eye_Angle) * Eye_Distance,
            y: this.snake.y + Math.sin(this.snake.angle + Eye_Angle) * Eye_Distance,
        }

        this.snake.game.screen.drawCircle(eye2Pos, 'eye');
    }
}