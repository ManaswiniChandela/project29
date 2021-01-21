const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var ground;
var base1;
var slingshot;

function setup() {
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(400,550,800,20);
  
    base1 = new Ground(100,250,100,20);
     
    //line 1
    b1 = new Box(330,235,30,40);
    b2 = new Box(360,235,30,40);
    b3 = new Box(390,235,30,40);
    b4 = new Box(420,235,30,40);
    b5 = new Box(450,235,30,40);
    //line 2
    b6 = new Box(360,195,30,40);
    b7 = new Box(390,195,30,40);
    b8 = new Box(420,195,30,40);
    //line 3
    b9 = new Box(390,155,30,40);
  
    slingshot = new SlingShot(this.polygon,{x :100 ,y :200});
    
  }
  
  function draw() {
    background("black"); 
    Engine.update(engine); 
    drawSprites();
  
    ground.display();
  
    base1.display();
  
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
  }

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}