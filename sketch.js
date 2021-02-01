const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var score=0;


function preload(){

    polygon_img=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,height,1200,20);


    platform=new Ground(400,265,250,20);
    platform2=new Ground(910,235,210,20);

    //creating multiple boxes here
    //level 3
    box1=new Box(310,235,30,40);
    box2=new Box(340,235,30,40);
    box3=new Box(370,235,30,40);
    box4=new Box(400,235,30,40);
    box5=new Box(430,235,30,40);
    box6=new Box(460,235,30,40);
    box7=new Box(480,235,30,40);

    //level 2
    box8=new Box(340,195,30,40);
    box9=new Box(370,195,30,40);
    box10=new Box(400,195,30,40);
    box11=new Box(427,195,30,40);
    box12=new Box(454,195,30,40);
    
    //level 1
    box13=new Box(370,155,30,40);
    box14=new Box(400,155,30,40);
    box15=new Box(430,155,30,40);
    
    //level top
    box16=new Box(400,115,30,40);
  
//second blocks 
// level 3
box17=new Box(850,210,30,40);
box18=new Box(880,210,30,40);
box19=new Box(910,210,30,40);
box20=new Box(940,210,30,40);
box21=new Box(970,210,30,40);

//level 2
box22=new Box(880,180,30,40);
box23=new Box(910,180,30,40);
box24=new Box(940,180,30,40);

//level 1
box25=new Box(910,128,30,40);

ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new SlingShot(this.ball,{x:100,y:200});
}



   function draw(){
background("grey")
Engine.update(engine);

textSize(25)
fill("white")
text("DRAG the polygon to destroy the blocks.",250,30);



textSize(20)
fill("white")
text("SCORE:"+score,1000,45);

fill("green"); 
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

fill("white");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill("orange");
box13.display();
box14.display();
box15.display();

fill("blue")
box16.display();

fill("red")
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

fill("pink")
box22.display();
box23.display();
box24.display();

fill("purple")
box25.display();

platform.display();
platform2.display();


ground.display();



imageMode(CENTER);

    image(polygon_img,ball.position.x,ball.position.y,40,40);
   // polygon.display();

   }
   
   function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

    
  }
  
  
  function mouseReleased(){
slingShot.fly();
  }
  
  
   
   
   
   
   
   
   
   
   
   
   
   
    
