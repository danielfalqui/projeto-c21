
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(220,10,10,ball_options);
	World.add(world,ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1000,600,20,120);



	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  fill("white");
  ellipseMode(CENTER);


	  if (keyCode === UP_ARROW){

		Bodies.applyForce(ball,ball.position.x,1);
	  }

   groundObj.display();

  drawSprites();
 
}

//pro poderia me ajudar a solucionar o erro?

