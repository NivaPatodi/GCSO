var car, wall;

var speed, weight;



function setup() 

{
  
   createCanvas(1200,400);

 
  car = createSprite(50, 200, 50, 50);


   wall = createSprite(1000, 200, 60, height/2);
 

  speed = random(55, 90);
  weight = random(400, 1500);

}



function draw() 

{
  
   background(0);


 
  car.shapeColor = "white";

   wall.shapeColor = color(80, 80, 80);

 

  car.velocityX = speed;

 

  if(car.isTouching(wall))
  
   {

      var deformation = 0.5 * weight * speed / 22509

;
      car.velocityX = 0;


  
    if(deformation > 180)
    
      {

         car.shapeColor = "green";

      }

    

      if(deformation < 180 && deformation > 100)

      {
      
         car.shapeColor = "yellow";

      }

    

      if(deformation < 100)
    
      {

         car.shapeColor = "red";

      }
  
   }


   drawSprites();

}