  
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var m = [];
var y = 0;
var boy_image,tree_image;

function preload()
{
	boy_image = loadImage("images/boy.png");
	tree_image = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750,980,1500,20);
	stone =  new Stone(200,500,50);
	for(i =1; i<=3 ; i++)
	{
		y = y + 2;
		m[i] = new Mango(900 + 50*y, 470,50,50);
	}
	for(i =1; i<=5 ; i++)
	{
		y = y + 2;
		m[i+3] = new Mango(500 + 50*y, 550,50,50);
	}

	string1 = new StringConstraint(stone.body,{x:200, y:750});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  fill ("brown");
  ground.display();
  stone.display();

  imageMode(CENTER);
  image(boy_image,300,850,boy_image.width/5,boy_image.height/5);
  image(tree_image,1100,660,tree_image.width/2,tree_image.height/2);

  for(i =1; i<=3 ; i++)
  {
      m[i].display();
  }

  for(i =1; i<=5 ; i++)
  {
	  
	  m[i+3].display();
  }

  string1.display();

  textSize(40);
  fill ("black");
  text ("Click SpaceBar to get another chance !",200,300);

  for (i=1;i<=8;i++)
  {
    detectcollision(stone,m[i]);
  }

  
  drawSprites();
 
}

function mouseDragged(){
 
	Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});

}


function mouseReleased(){
string1.fly();
}

function keyPressed(){
  if(keyCode === 32){
  string1.attach(stone.body);
  }
}

function detectcollision(xstone,xmango)
{
     mangobodyposition = xmango.body.position;
     stonebodyposition = xstone.body.position;

     var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
    
     //console.log("x=" + mangobodyposition.x + "y = " + mangobodyposition.y + "STONE x = "+stonebodyposition.x + "STONE Y = "+stonebodyposition.y);

    if (distance<=xmango.r+xstone.r +10000)
    {
      console.log("collided!")
      Matter.Body.setStatic(xmango.body,false);
    }
}