class bg{
    constructor(game){
        this.game = game;
    }

    update(){

    }

    drawLine(startPos, endPos){
        this.game.ctx.strokeStyle = '#d9d9d9' ;
        this.game.ctx.lineWidth = 3;
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(startPos.x, startPos.y);
        this.game.ctx.lineTo(endPos.x, endPos.y);
        this.game.ctx.stroke();
    }
    draw(){
        //draw verticle lines
        let firstLineX = Grip_Size - (this.game.snake.x % Grip_Size);

        let currentLineX = firstLineX;
        while(currentLineX <= Screen_Width){
            this.drawLine(
                {x: currentLineX, y: 0},
                {x: currentLineX, y: Screen_Height}
            );
            currentLineX += Grip_Size;
        }

        //draw horizontal lines
        let firstLineY = Grip_Size - (this.game.snake.y % Grip_Size);

        let currentLineY = firstLineY;
        while(currentLineY <= Screen_Width){
            this.drawLine(
                {x: 0, y: currentLineY},
                {x: Screen_Width, y: currentLineY}
            );
            currentLineY += Grip_Size;
        }

        this.drawLine(
            {x: 100, y: 100},
            {x: 200, y: 200}
        );
    }
}