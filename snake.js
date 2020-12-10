class snake {
    constructor (game){
        this.game = game;
        this.x = Game_Width / 2;
        this.y = Game_Height / 2;

        this.angle = 0;
        this.tailPositions = [];

        this.eye = new eye(this);

        this.createTail();

        this.listenMouseEvent();
        
    }
    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove',  (event) => {
            var rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove( {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        });
    }
    processMouseMove(mousePos){
        this.angle = Math.atan2(
            mousePos.y - (Screen_Height / 2),
            mousePos.x - (Screen_Width / 2)  
        );
    }

    createTail(){

        for(let i = 0; i<200; i++){
        this.tailPositions.push( {
            x: this.x - (i* Snake_Speed),
            y: this.y
        })
        }

    }
    
    update(){
        let newTailPositions = {
            x: this.x += Math.cos(this.angle) * Snake_Speed,
            y: this.y += Math.sin(this.angle) * Snake_Speed
        }

        this.tailPositions.unshift(newTailPositions);
        this.tailPositions.pop();

        this.x = newTailPositions.x;
        this.y = newTailPositions.y;

    }

    draw(){

        //draw shadow
        for (let i = this.tailPositions.length - 1; i > 1;   i --){
                this.game.screen.drawCircle(
                    {
                        x: this.tailPositions[i].x, 
                        y: this.tailPositions[i].y
                    }, 
                    'shadow'
                );  
            }       
        //draw body
        for (let i = this.tailPositions.length - 1; i > 1;   i --){
            if (i % 6 == 0) {
                this.game.screen.drawCircle(
                    {
                        x: this.tailPositions[i].x, 
                        y: this.tailPositions[i].y
                    }, 
                    'snake'
                );  
            }       
        }

        //draw head
        this.game.screen.drawCircle(
            {
                x: this.x, 
                y: this.y
            }, 
            'snake'
        );  

        //draw eyes
        this.eye.draw();
    }
}