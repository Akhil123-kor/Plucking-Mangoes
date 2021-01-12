
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1,boy,boyImage,tree,mango1,mango2,mango3,mango4,mango5,launcher1;

function preload()
{
	boyImage=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(250,470,70,70)

	engine = Engine.create();
	world = engine.world;

	stone1=new Stone(235,420,30)

	tree=new Tree(270,470,140,140)

	mango1=new Mango(280,330,30)
	mango2=new Mango(290,320,30)
	mango3=new Mango(270,310,30)
	mango4=new Mango(250,290,30)
	mango5=new Mango(260,310,30)

	launcher1=new Launcher(235,420,20,0)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background("white");
  
  detectollision(stone1,mango1)
  detectollision(stone1,mango2)
  detectollision(stone1,mango3)
  detectollision(stone1,mango4)
  detectollision(stone1,mango5)

  stone1.display()
  boy.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		launcher1.attach(stone1.body)
	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}