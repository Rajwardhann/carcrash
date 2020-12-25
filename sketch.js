var zenia;
var tourus;
var cyclap;
var wall1;
var wall2;
var wall3;
var track1;
var track2;
var weight;
var speed,speed1,speed2;
var gamestate = "waiting";
var role = 0;

function setup() {
  createCanvas(800,700);
  zenia = createSprite(50, 100, 40, 40);
  zenia.shapeColor = "white";
  
  tourus = createSprite(50,300,40,40);
  tourus.shapeColor = "white";
  

  cyclap = createSprite(50,500,40,40);
  cyclap.shapeColor = "white";
  

  wall1 = createSprite(780,100,10,180);
  wall1.shapeColor ="red";

  wall2 = createSprite(780,300,10,180);
  wall2.shapeColor ="red";

  wall3 = createSprite(780,500,10,180);
  wall3.shapeColor ="red";

  track1 = createSprite(400,200,800,5);
  track2 = createSprite(400,400,800,5);
}

function draw() {
  background("black");
  
  
  if(gamestate === "waiting")
  {
    
    fill("red");
    textSize(50);
    text("Press Space To Test",150,330);
    zenia.velocityX = 0;
    cyclap.velocityX = 0;
    tourus.velocityX = 0;
    if(keyDown("space"))
    {
      
      gamestate = "car1";
    }

    
  }

  if(gamestate === "waiting1")
  {
    fill("red");
    textSize(50);
    text("Press Space To Test 2nd",150,330);
    if(keyDown("space"))
    {
      gamestate = "car2";
    }
  }

  if(gamestate === "waiting2")
  {
    fill("red");
    textSize(50);
    text("Press Space To Test 3rd",150,330);
    if(keyDown("space"))
    {
      gamestate = "car3";
    }
  }

  if(gamestate === "car1")
  {
    speed = random(55,90);
    zenia.velocityX = speed;
    
    Deformation1();

    if(wall1.x - zenia.x < (zenia.width + wall1.width)/2)
      {
        gamestate = "waiting1";
        zenia.velocityX = 0;
        if(deform1 < 100)
        {
          zenia.shapeColor = "green";
        } 

        if(deform1 < 180 && deform1 > 100)
        {
          zenia.shapeColor = "yellow";
        }

        if(deform1 > 180 )
        {
          zenia.shapeColor = "red";
        }

        

      } 
  }

  if(gamestate === "car2")
  {
    speed1 = random(55,65);
    tourus.velocityX = speed1;

    Deformation2();

    if(wall2.x - tourus.x < (tourus.width + wall2.width)/2)
    {
      gamestate = "waiting2";
      tourus.velocityX = 0;
      if(deform2 < 100)
        {
          tourus.shapeColor = "green";
        } 

        if(deform2 < 180 && deform2 > 100)
        {
          tourus.shapeColor = "yellow";
        }

        if(deform2 > 180 )
        {
          tourus.shapeColor = "red";
        }
    }

  }

  if(gamestate === "car3")
  {
    speed2 = random(40,100);
    cyclap.velocityX = speed2;

    Deformation3();

    if(wall3.x - cyclap.x < (cyclap.width + wall3.width)/2)
    {
      cyclap.velocityX = 0;
      gamestate = "waiting";
      zenia.x = 50;
      zenia.y = 100;
      zenia.velocityX = 0;
      zenia.shapeColor = "white";

      tourus.x = 50
      tourus.y = 300;
      tourus.velocityX = 0;
      tourus.shapeColor = "white";

      cyclap.x = 50;
      cyclap.y = 500;
      cyclap.velocityX = 0;
      cyclap.shapeColor = "white";
      
      
      
      if(deform3 < 100)
        {
          cyclap.shapeColor = "green";
        } 

        if(deform3 < 180 && deform3 > 100)
        {
          cyclap.shapeColor = "yellow";
        }

        if(deform3 > 180 )
        {
          cyclap.shapeColor = "red";
        }
    }

  
  }
  
  
  
  
  
  weight = random(400,1500);
  drawSprites();
}

function Deformation1(){
  deform1 = 0.5 * weight * speed * speed/22500;
}

function Deformation2(){
  deform2 = 0.5 * weight * speed1 * speed1/22500;
}

function Deformation3(){
  deform3 = 0.5 * weight * speed2 * speed2/22500;
}