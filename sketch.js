
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(200,600,50,{isStatic:true})
    World.add(world,ball)
    ground=Bodies.rectangle(200,500,200,{isStatic:true})
	World.add(world,ground);
	Engine.run(engine);
	
}



function draw() {
  
  background(800);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,200,200)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
 
}



