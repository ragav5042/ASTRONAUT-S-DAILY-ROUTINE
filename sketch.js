var astronaut

function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}




function setup() {
  createCanvas(600, 400);
  astronaut=createSprite(300,200,100,100);
  astronaut.addAnimation("sleepping",sleep)
  astronaut.scale=0.1
  
}    

function draw() {
  background(bg);
  edges=createEdgeSprites();
  astronaut.bounceOff(edges)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    // astronaut.y=300
    // astronaut.velocityX=0
    // astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    // astronaut.y=300
    // astronaut.velocityX=0
    // astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    // astronaut.y=300
    // astronaut.velocityX=0
    // astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    // astronaut.y=300
    // astronaut.velocityX=0
    // astronaut.velocityY=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    //astronaut.y=300
    astronaut.velocityX=2
    astronaut.velocityY=1
  }
  
  

  drawSprites()
  textSize(32)
  fill("white")
  text("Instructions",15,30)
  textSize(18)
  text("Up Arrow = Brushing",15,50);
  text("Down Arrow = Gymming",15,70);
  text("Left Arrow = Eating",15,90);
  text("Right Arrow = Bathing",15,110);
  text("m key = Moving",15,130);
}