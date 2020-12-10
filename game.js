class game{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = Screen_Width;
        this.canvas.height = Screen_Height;
        document.body.appendChild(this.canvas);

        this.snake = new snake(this); 
        this.bg = new bg(this);
        this.screen = new screen(this);


        this.loop();

    }

    loop(){
        this.update();
        this.draw();
        setTimeout( () => this.loop(),20);
    }

    update(){
        this.snake.update();
        this.bg.update();
        this.screen.update();

    }

    clearScreen(){
        this.ctx.fillStyle = 'f2f2f2';
        this.ctx.fillRect(0, 0, Screen_Width, Screen_Height);
    }

    draw(){
        this.clearScreen();
        this.bg.draw();
        this.snake.draw();
    }
}

var g = new game();