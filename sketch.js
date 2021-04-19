var bullet;
var wall;
var weight;var speed;
var damage;
var thickness;
function setup() {
  createCanvas(800,400);

  bullet=createSprite(-20,200,60,20);

  thickness=Math.round(random(22,83))
  wall=createSprite(600, 200, thickness, height/2);


  speed = Math.round(random(223,321));
  weight=Math.round(random(30,52));

  bullet.velocityX=speed;

  damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
}

function draw() {
  background("black");  
  wall.depth=bullet.depth;
  bullet.depth=bullet.depth+1;

  if(wall.x-bullet.x <bullet.width/2+wall.width/2){
  bullet.velocityX=0;
  if(damage<10){
    bullet.shapeColor="red";
  }
  if(damage>10){
    bullet.shapeColor="lime";
  }
  }

  drawSprites();
}