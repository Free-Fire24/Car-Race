var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d") ;
var background_img = "race back img.jpg" 
var car_img = "images.jpg"; 
var car_height = 10 ; 
var car_width = 10 ;
var car1_img = "images.jpg"; 
var car1_height = 10 ; 
var car1_width = 10 ;


function add()   {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground ;
background_imgTag.src = background_img; 

car_imgTag = new Image(); 
car_imgTag.onload = uploadcar;
car_imgTag.src = car_img;

car1_imgTag = new Image(); 
car1_imgTag.onload = uploadcar;
car1_imgTag.src = car1_img;
}



function uploadBackground()  {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar()  {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
   

}


window.addEventListener("keydown", mykeydown) ;

function mykeydown(e)  {
 keyPressed = e.keyCode;
 console.log(keyPressed) ; 
   if(keyPressed == '38'){
     up() ;
     console.log("up");  
   }

   if(keyPressed == '40'){
    down() ;
    console.log("down");  
  }

  if(keyPressed == '37'){
    left() ;
    console.log("left");  
  }

  if(keyPressed == '39'){
    right() ;
    console.log("right");  
  }
}

