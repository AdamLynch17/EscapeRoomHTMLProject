var NoOfWrong1 = 0;
var MethodOfDeath = "Door"

function popUp1(){
    var code1 = prompt("Door is locked\nEnter 4 digit code to unlock it ");
    
    if (code1 == "4710" || code1 == "2092" || code1 == "8306"){
        correctCode1(code1);
         
    } else if (code1 != "2092" || code1 != "4710" || code1 != "8306"){
        var txt = "ERROR - Code is incorrect";
        NoOfWrong1 += 1;
        var br = "<br>";
        var txt1 = "Attempted code: "+ code1;
        document.getElementById("demo").innerHTML = txt + br + txt1;
        
    } else {
         var txt = "ERROR - Code is incorrect";
         NoOfWrong1 += 1;
        var br = "<br>";
        var txt1 = "Attempted code: "+ code1;
        document.getElementById("demo").innerHTML = txt + br + txt1;
        }     
}

var timer1 = 20;
var downloadTimer = setInterval(function(){
  if(timer1 <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "FAILED" 
    sessionStorage.setItem('timer1', timer1);
    sessionStorage.setItem('NoOfWrong1', NoOfWrong1);
    sessionStorage.setItem('MethodOfDeath', MethodOfDeath)
    window.location.href = ("EndScreenFail.html");  
  
  } else {
    document.getElementById("countdown").innerHTML = timer1 + " seconds remaining";
  }
  timer1 -= 1;  
    
}, 1000);

function correctCode1(code1) {
  var code1Prompt = code1;
    var code2 = prompt("One code has been entered correctly,\n Enter 2 more correct codes to unlock the door");
 
       if ((code1 != code2 )  && (code2 == "4710" || code2 == "2092" || code2 == "8306")){    
            correctCode2(code2,code1);
      
        } else if (code1 == code2 || (code2 != "2092" || code2 != "4710" || code2 != "8306")){
            var txt = "ERROR - Code entered is incorrect";
            var txt1 = "1st Code entered: "+ code1;
            var txt2 = "Attempted code: "+ code2;
            NoOfWrong1 += 1;
            var br = "<br>";
            document.getElementById("demo").innerHTML = txt + br + txt1 + br + txt2;
       
        }  else {
            var txt = "ERROR - Code entered is incorrect";
            var txt1 = "1st Code entered: "+ code1Prompt;
            var br = "<br>";
            NoOfWrong1 += 1;
            var txt2 = "2nd Code entered: "+ code2Prompt;
            var txt3 = "Attempted code: "+ code3;
            document.getElementById("demo").innerHTML = txt + br + txt1 + br +  txt2 + br + txt3;   
        } 
}


function correctCode2(code2,code1) {
    var code2Prompt = code2;
    var code1Prompt = code1;
    var code3 = window.prompt("Two codes has been entered correctly,\n Enter One more correct codes to unlock the door");
    
   if ((code1 != code3 && code2 != code3)  && (code3 == "4710" || code3 == "2092" || code3 == "8306")){
       
        var txt = "Door UNLOCKED!!!!!!!!!!!! ";
        var txt1 = "1st Code entered: "+ code1Prompt;
        var br = "<br>";
        var txt2 = "2nd Code entered: "+ code2Prompt;
        var txt3 = "3rd Code entered: "+ code3;
       
       document.getElementById("demo").innerHTML = txt + br + txt1 + br + txt2 + br + txt3; 
       sessionStorage.setItem('timer1', timer1);
       sessionStorage.setItem('NoOfWrong1', NoOfWrong1);
       window.location.href = ("HomeScreen.html"); 
        
    } else if (code1 == code3 || code2 == code3){
        var txt = "ERROR - Code entered more than once"
        var txt1 = "1st Code entered: "+ code1Prompt;
        NoOfWrong1 += 1;
        var br = "<br>";
        var txt2 = "2nd Code entered: "+ code2Prompt;
        var txt3 = "3rd Code entered: "+ code3;
       
        document.getElementById("demo").innerHTML = txt + br + txt1 + br + txt2 + br + txt3; 
       
     } else {
        var txt = "ERROR - Code entered is incorrect";
        var txt1 = "1st Code entered: "+ code1Prompt;
        var br = "<br>";
        NoOfWrong1 += 1;
        var txt2 = "2nd Code entered: "+ code2Prompt;
        var txt3 = "Attempted code: "+ code3;
        document.getElementById("demo").innerHTML = txt + br + txt1 + br + txt2 + br + txt3;   
    }
}