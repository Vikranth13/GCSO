var wall, car1, car2, car3, car4;
var c1state = 0;
var c2state = 0;
var c3state = 0;
var c4state = 0;
var speed1, speed2, speed3, speed4;
var weight1, weight2, weight3, weight4; 
var divider1, divider2, divider3, divider4;  

function setup()
{
  createCanvas(400,400);
  
  wall = createSprite(200, 30, 400, 10);
  wall.shapeColor = "orange";
  wall.velocityY = 0;

  speed1 = random(-55,-100);
  speed2 = random(-55,-100);
  speed3 = random(-55,-100);
  speed4 = random(-55,-100);
  weight1 = random(-400,-1500);
  weight2 = random(-400,-1500);
  weight3 = random(-400,-1500);
  weight4 = random(-400,-1500);
  
  car1 = createSprite(20,370,10,30);
  car1.shapeColor = "white";

  car2 = createSprite(140, 370,10,30);
  car2.shapeColor = "white";

  car3 = createSprite(260,370,10,30);
  car3.shapeColor = "white";

  car4 = createSprite(380,370,10,30);
  car4.shapeColor = "white";

  divider1 = createSprite(80,200,10,400);
  divider1.shapeColor = "blue";
  
  divider2 = createSprite(200,200,10,400);
  divider2.shapeColor = "blue";
  
  divider3 = createSprite(320,200,10,400);
  divider3.shapeColor = "blue";
  
  
  
}
function draw()
{
  background(0);
  
  c1state = 1;
  c2state = 1;
  c3state = 1;
  c4state = 1;
  
  if(c1state === 1)
  {
    car1.velocityY = speed1/10;
  }
  if(Math.abs(car1.y-wall.y)<wall.height/2+car1.height/2)
  {
    c1state = 2;
    deform1();
  }
  if(c1state === 2 )
  {
      car1.velocityY = 0;     
  }

  if(c2state === 1)
  {
    car2.velocityY = speed2/10;
  }
  if(Math.abs(car2.y-wall.y)<wall.height/2+car2.height/2)
  {
    c2state = 2;
    deform2();
  }
  if(c2state === 2 )
  {
      car2.velocityY = 0;
  }

  if(c3state === 1)
  {
    car3.velocityY = speed3/10;
  }
  if(Math.abs(car3.y-wall.y)<wall.height/2+car3.height/2)
  {
    c3state = 2;
    deform3();
  }
  if(c3state === 2 )
  {
      car3.velocityY = 0;
  }

  if(c4state === 1)
  {
    car4.velocityY = speed4/10;
  }
  if(Math.abs(car4.y-wall.y)<wall.height/2+car4.height/2)
  {
    c4state = 2;
    deform4();
  }
  if(c4state === 2 )
  {
      car4.velocityY = 0;  
  }

  drawSprites();

}
function deform1()
{
  if((0.5*weight1*speed1*speed1)/22500 > -100)
  {
    car1.shapeColor = "green";
  }
  else if((0.5*weight1*speed1*speed1)/22500 < -100 && (0.5*weight1*speed1*speed1)/22500 > -180)
  {
    car1.shapeColor = "yellow";
  }
  if((0.5*weight1*speed1*speed1)/22500 < -180)
  {
    car1.shapeColor = "red";
  }
}

function deform2()
{
  if((0.5*weight2*speed2*speed2)/22500 > -100)
  {
    car2.shapeColor = "green";
  }
  else if((0.5*weight2*speed2*speed2)/22500 < -100 && (0.5*weight2*speed2*speed2)/22500 > -180)
  {
    car2.shapeColor = "yellow";
  }
  if((0.5*weight2*speed2*speed2)/22500 < -180)
  {
    car2.shapeColor = "red";
  }
}

function deform3()
{
  if((0.5*weight3*speed3*speed3)/22500 > -100)
  {
    car3.shapeColor = "green";
  }
  else if((0.5*weight3*speed3*speed3)/22500 < -100 && (0.5*weight3*speed3*speed3)/22500 > -180)
  {
    car3.shapeColor = "yellow";
  }
  if((0.5*weight3*speed3*speed3)/22500 < -180)
  {
    car3.shapeColor = "red";
  }
}

function deform4()
{
  if((0.5*weight4*speed4*speed4)/22500 > -100)
  {
    car4.shapeColor = "green";
  }
  else if((0.5*weight4*speed4*speed4)/22500 < -100 && (0.5*weight4*speed4*speed4)/22500 > -180)
  {
    car4.shapeColor = "yellow";
  }
  if((0.5*weight4*speed4*speed4)/22500 < -180)
  {
    car4.shapeColor = "red";
  }
}