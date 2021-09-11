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
var btn1;

var left,right,up,down;

function preload()
{
	upImg = loadImage("up.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,600,width,20);
	leftSide = new Ground(1100,550,20,120);
	rightSide = new Ground(1200,550,20,120);

	right = new Ground(width,height/2,10,height);
    left = new Ground(0,height/2,10,height);
    up = new Ground(width/2,0,width,10);
    down = new Ground(width/2,height,width,10);

	
	

    var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction :0	,
		density :1.2,
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

  up.display();
  down.display();
  right.display();
  left.display();
  
  Engine.update(engine);

  keyPressed();
  
  drawSprites();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.5})
	}

}


