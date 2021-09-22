class CannonBall{

    constructor(x, y){

        var options={
            isStatic: true
            
        }

        this.radius = 30
        this.body = Bodies.circle(x, y, this.radius, options)
     
        this.image = loadImage("assets/cannonball.png")
        World.add(world, this.body)
    }

    shoot(){

        //setting angle 👍
        var newAngle = cannon.angle -63
        newAngle = newAngle*(3.14/180);

        //second velocity depending on angle 👍
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);

        //to turn on the gravity 👍
        Matter.Body.setStatic(this.body, false)

        //setting velocity of the object 👍
        Matter.Body.setVelocity(this.body, {
            x: velocity.x*(180/3.14),
            y: velocity.y*(180/3.14)
        })

    }
    

    display(){

        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.radius, this.radius)
        pop();

    }

}