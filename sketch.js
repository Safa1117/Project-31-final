const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    for (var k = 0; k<=width; k=k + 80){
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
    
    for (var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j, 75, 10));
    }
    for (var j = 15; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j, 175, 10));
    }
    for (var j = 40; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j, 275, 10));
    }
    for (var j = 15; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j, 375, 10));
    }


    ground = new Ground(240, 780, 900, 30);
    

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var p = 0; p<plinkos.length; p++){
    plinkos[p].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

}