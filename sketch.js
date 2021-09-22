const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var cannon, ground, tower; 
var angle;
var cannonball;

var backgroundImg, towerImg

function preload() {

  backgroundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")
  cannonImg = loadImage("assets/canon.png")
  
 
 
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15
  var options={
    isStatic: true

  }
  ground=Bodies.rectangle(0, height, 1200, 20, options);
  World.add(world, ground);

  tower=Bodies.rectangle(150, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Canon(180, 110, 130, 100, angle)

  cannonball = new CannonBall(cannon.x+5, cannon.y+2);
 
}

function draw() {
  background(backgroundImg);
 
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, 1200, 20)

  push()
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310)
  pop()
  
  
  cannonball.display();
  cannon.display();
   
}

//predefined function 👍, executed when key is released 👍
function keyReleased(){


  if(keyCode === DOWN_ARROW){
    cannonball.shoot();
  }

}