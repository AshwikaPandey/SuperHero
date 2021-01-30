const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine
var world
var mo
var he
var mon
var her


function preload() {
//preload the images here
var mo= loadImage("Monster-01.png")
var mon=loadImage("Monster-02.png")
 back= loadImage("GamingBackground.png")
var her= loadImage("Superhero-02.png")

}

function setup() {
  createCanvas(1200, 1200);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  //accidentaly swapped the classes
  superhero= new Monster(mouseX,mouseY,30)
  monster= new Hero(600,720,50,50)
   
  ground= new Ground(600,400,300,20)
  box1= new Box(700,380,40,40)
  box2 = new Box(700,340,40,40)
  box3 = new Box(700,300,40,40)
  box5 = new Box(700,260,40,40)
  box6 = new Box(700,220,40,40)
  box7= new Box(700,180,40,40)

 // box8= new Box(660,400,40,40)
  box9= new Box(660,380,40,40)
  box10= new Box(660,340,40,40)
  box11= new Box(660,300,40,40)
  box12= new Box(660,260,40,40)
  box13= new Box(660,220,40,40)

  //box14= new Box(620,400,40,40)
  box15= new Box(620,380,40,40)
  box16= new Box(620,340,40,40)
  box17= new Box(620,300,40,40)

  
  
  rope= new Fly(superhero.body,{x:200,y:50})
}

function draw() {
  background(back);
ground.display()
superhero.display()
if(box1.body.position.y<360){
monster.display()
}
rope.display()
box1.display()
box2.display()
box3.display()
box5.display()
box6.display()
box7.display()

//box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()

//box14.display()
box15.display()
box16.display()
box17.display()

}

 function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}
