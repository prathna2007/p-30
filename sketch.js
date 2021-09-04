const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var polygon,polygon_img;

function preload(){
    polygon_img = loadImage ("polygon.png");
}
    

function setup() {
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    block1 = new Block(300,275,30,40);
 
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  slings = new Slingshot(this.polygon,{x:50,y:50});

}

function draw() {
    background(255);
    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
   
    block13.display();
    block14.display();
    block15.display();
    slings.display();
    block16.display();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})   
}

function mouseReleased(){
    slings.fly();
}

function keyPressed() {
    if(keyCode===32){
        slings.attached(this.polygon);
    }
}