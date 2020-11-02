var bullet,wall ;
var speed,weight

function setup() {

  speed  = random(55,90);
  weight = random(400,1500);

  thikness = random(22,83);
  createCanvas(1600,400);
 
  bullet = createSprite(50,200,30,20);
  bullet.velocityX = speed;

 wall = createSprite(1500,200,60,height/2);
 wall.shapecolor = color(80);
}

function draw() {

  background(0); 
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0; 
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10) {
      wall.shapeColor=color(255,0,0); 
                  } 
    if(damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
  
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) { 
    return true 
  }
  else{
  return false; 
}
}
