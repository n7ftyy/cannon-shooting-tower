class Canon{
    constructor(x, y, w, h, angle){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.canonImg = loadImage("assets/canon.png");
        this.canonBase = loadImage("assets/cannonBase.png");
        
    }
    
    display(){

        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
            this.angle += 1
        }

        if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
            this.angle -= 1
        }
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canonImg,0,0, 120, 280);
        pop();
        image(this.canonBase, 30, 30, 250, 200);
        noFill();

    }
}