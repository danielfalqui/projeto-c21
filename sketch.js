
const Engine = Matter.Engine;//ok
const World = Matter.World;//ok
const Bodies = Matter.Bodies;//ok
const Body = Matter.Body;//ok

var ball,groundObj,leftSide,rightSide;
//CRIAR VARIÁVEIS world e engine
var engine,world;


/*function preload()
{
	não precisa dessa função
}*/

function setup() {
	//ajustar tamanho para 1600,700
	createCanvas(1600, 700);
    
	engine = Engine.create();//ok
	world = engine.world;//ok

	//Create the Bodies Here.
	var ball_options={//ok
		isStatic:false,//ok
		restitution:0.3,//ok
		friction:0,//ok
		density:1.2//ok
	}

	ball = Bodies.circle(260,100,20,ball_options);//ok
	World.add(world,ball);//ok

	groundObj = new Ground(width/2,680,width,20);//ok
	//ajuste posição y para 610
	leftSide = new Ground(1100,610,20,120);
	//ajuste posição x 1350 y 610
	rightSide = new Ground(1350,610,20,120);

	Engine.run(engine);//ok
  
}


function draw() {

	//Usar rectMode por causa dos objetos ground
	rectMode(CENTER);
	background(0);

	//ellipse (x,y,larg,alt) o raio é repetido em larg e altura20,20
	ellipse(ball.position.x,ball.position.y,20,20);
	fill("white");
	
	//ellipseMode(CENTER); não precisa

	
	groundObj.display();//ok
	leftSide.display();//ok
	rightSide.display();//ok

	//drawSprites(); Não temos sprites
 
}

//pro eu atualizei mas as coisas ainda estão dando erro porque

function keyPressed(){//ok
	if (keyCode === UP_ARROW){//ok

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});//ok
	}
  }