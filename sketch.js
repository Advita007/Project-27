
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,bg1;

function preload()
{
bg1 = loadImage("Bg.jpg")	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  roof = new Roof (350,100,350,25);
  bob1 = new Bob (250,300,25);
  bob2 = new Bob (300,300,25);
  bob3 = new Bob (350,300,25);
  bob4 = new Bob (400,300,25);
  bob5 = new Bob (450,300,25);

  rope1 = new Rope(bob1.body,roof.body,-50*2,0);
  rope2 = new Rope(bob2.body,roof.body,-25*2,0);
  rope3 = new Rope(bob3.body,roof.body,-0.5*2,0);
  rope4 = new Rope(bob4.body,roof.body,25*2,0);
  rope5 = new Rope(bob5.body,roof.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg1);

  roof.display();
  bob1.display();
  bob2.display();
  //51,255,102
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  stroke("white")
  strokeWeight(1.3);
  textFont("Georgia");
  fill("white")
  textSize(30);
  text("The Newton's Cradle",230,70)
  text("To observe this phenomenon, press the Right Arrow key.", 30,400)
 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85});
    
}
}



