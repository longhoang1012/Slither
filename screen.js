class screen{
    constructor(game){
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }

    update(){
        this.top = this.game.snake.y - (Screen_Height / 2);
        this.bottom = this.game.snake.y + (Screen_Height / 2);
        this.left = this.game.snake.x - (Screen_Width / 2);
        this.right = this.game.snake.y + (Screen_Width / 2);
    }

    drawCircle(pos, styleName){
        let styles = {};
        //style for snake
        styles['snake'] = {
            borderColor: 'red',
            color: '#F65A5A',
            with: 20
        };

        //style for shadow
        styles['shadow'] = {
            borderColor: 'rgba(0, 0, 0 ,0.01)',
            //color: 'rgba(0, 0, 0 ,0.4)',
            with: 28
        };
        styles['eye'] = {
            borderColor: 'red',
            color: 'white',
            with: 10
        }

        let stylesProperties = styles[styleName];

        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x  - this.left,
            pos.y - this.top,
            stylesProperties.with,
            0,
            Math.PI * 2,
        );
        this.game.ctx.fillStyle = stylesProperties.color ;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = stylesProperties.borderColor;
        this.game.ctx.stroke();
    }

}