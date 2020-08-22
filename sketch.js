const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var divionHeight = 300;
var particles =[];
var plinkos =[];
var divisions = [];

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divionHeight/2,10,divionHeight));
    }
    for(var j =40;j<= width;j= j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j =15;j<= width-10;j= j+50){
      plinkos.push(new Plinko(j,175));
    }
    for(var j =5;j<= width-20;j= j+50){
      plinkos.push(new Plinko(j,275));
    }
    if(frameCount %20 === 0){
      particles.push(new Particles(random(width/2-10,width/2+10),10,10));
    }
    


 ground = new Ground(240,795,500,10);
}

function draw() {
  background(0,0,0);  

  ground.display();
for(var k =0;k< divisions.length;k++){
divisions[k].display();
}
for(var j=0;j< plinkos.length;j++){
  plinkos[j].display();
}
for(var a=0;a< particles.length;a++){
  particles[a].display();
}







  
}