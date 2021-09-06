
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1200,600,20,120);


    var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2,
	}

	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);
    
    rectMode(CENTER);
	ellipseMode(RADIUS);
    
	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ellipse(ball.position.x,ball.position.y,20)

  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  Engine.update(engine);
  
  keyPressed();
 
  drawSprites();

 
}

function keyPressed(){
	if(keyDown == UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}


