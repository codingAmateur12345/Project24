
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, binWall1, binWall2, binWall3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Ball(50,600,30);

    ground = new Base(200,880,2000,10);

	binWall1 = new binWall(955,865,270,20);

	binWall2 = new binWall(1080,775,20,180);

	binWall3 = new binWall(830,775,20,180);

   Engine.run(engine);

     
	
}
function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paper.display();

  binWall2.display();

  binWall3.display();

  binWall1.display();

  keyPressed();

  if(paper.x>755){
MAtter.Body.setStatic(paper, true);
  }

  drawSprites();
 
}
function keyPressed(){
	  if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-15});
}

if(keyCode === DOWN_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:15});
}

	}
	
	