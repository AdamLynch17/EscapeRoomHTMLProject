var MethodOfDeath = "Spider";
var bar = document.getElementById("bar");
var interval = document.getElementById("interval");
var ball = document.getElementById("ball");

var mainWrapper=document.getElementById("mainWrapper");
var wrapper= document.getElementById("wrapper");
var navbar = document.getElementById("navbar");

var jumping = 0;
var counter = 0;
var lives = 3;
var timer = 19;
var downloadTimer = setInterval(function(){
    if(timer <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "SUCCESSFUL!";
        sessionStorage.setItem('livesused', lives);
        window.location.href = ("Task3.html");

  } else {
    document.getElementById("countdown").innerHTML = timer + " seconds remaining";
  }
  timer -= 1;
    
    
}, 1000);

interval.addEventListener('animationiteration', () =>{
    var random = Math.random()*3;
    var top = (random*100)+150;
    interval.style.top = -(top) + "px";
    counter++;
});

setInterval(function(){
    var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    if(jumping == 0){
    ball.style.top = (ballTop+3)+"px";
        
    }
    
    var barleft = parseInt(window.getComputedStyle(bar).getPropertyValue("left"));
    var intervalTop = parseInt(window.getComputedStyle(interval).getPropertyValue("top"));
    var ballTop = 
        parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var bTop = -(500-ballTop);
    if((ballTop>480)||((barleft<20)&&(barleft>-50)&&((bTop<intervalTop)||(bTop>intervalTop+130)))){
    lives -= 1;
        alert("Game over - Lives left " + lives);
        ball.style.top = 100 + "px";
        counter=0;
        if (lives < 1) {
            sessionStorage.setItem('livesused', lives);
            sessionStorage.setItem('timer3', timer);
            sessionStorage.setItem('MethodOfDeath', MethodOfDeath);
            window.location.href = ("EndScreenFail.html");
        }
        
    }
    
}, 10);


function jump(){
     jumping = 1;
     let jumpCount = 0;
     var jumpInterval = setInterval(function(){
         
          var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
                                      
         if((ballTop>6)&&(jumpCount<15)){
             ball.style.top = (ballTop -5)+"px";
             
         }
         
         if(jumpCount>20) {
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
          jumpCount++;
     },10);
    
    
}


