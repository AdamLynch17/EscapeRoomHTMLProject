function setSize(fSize) {
    var x = document.getElementsByClassName('content');
    for (var i=0; i<x.length; i++) {
        x[i].className = fSize + ' content';
    } 
    sessionStorage.setItem('fontSize',fSize);
    
}
function clearSession() {
    sessionStorage.clear();
    location.reload();
}
function loadFromSession() {
    if (sessionStorage.getItem('fontSize')===null) {
        sessionStorage.setItem('fontSize','normal');
    } else {
        setSize(sessionStorage.getItem('fontSize'));
    }
}

function send() {              
     var pName = document.getElementById('pName').value;
     var color = document.getElementById('color').value;
     alert(pName);
     alert(color);           
     sessionStorage.setItem('pName', pName);
     sessionStorage.setItem('color', color);
     
     window.open('TestScreen3.html','_self');
}

function receive() {
     var timer = sessionStorage.getItem('timer');
     document.body.innerHTML += '<p>Timer: ' + timer + '</p>';
}

function blueImgChange() {
    var BlueImage_Id = document.getElementById("bluePotion");
    if (BlueImage_Id.src.match("images/bluePotion.png")) {
        BlueImage_Id.src = "images/bluePotionTick.png";
    } else {
        BlueImage_Id.src="images/bluePotion.png";
    }
}

function orangeImgChange() {
    var OrangeImage_Id = document.getElementById("orangePotion");
    if (OrangeImage_Id.src.match("images/orangePotion.png")) {
        OrangeImage_Id.src = "images/orangePotionTick.png";
    } else {
        OrangeImage_Id.src="images/orangePotion.png";
    }
}

function pinkImgChange() {
    var PinkImage_Id = document.getElementById("pinkPotion");
    if (PinkImage_Id.src.match("images/pinkPotion.png")) {
        PinkImage_Id.src = "images/pinkPotionTick.png";
    } else {
        PinkImage_Id.src="images/pinkPotion.png";
    }
}

function greenImgChange() {
    var GreenImage_Id = document.getElementById("greenPotion");
    if (GreenImage_Id.src.match("images/greenPotion.png")) {
        GreenImage_Id.src = "images/greenPotionTick.png";
    } else {
        GreenImage_Id.src="images/greenPotion.png";
    }
}

function shovelClicked() {
    var txt1 = "Item selected is: Shovel";
    var txt2 = "<br>";
    var txt3 = "Code is: ";
    var code = "5 7 9 1";
     document.getElementById("shovel").innerHTML = txt1 + txt2 + txt3 + code; 
}

function pickaxeClicked() {
    var txt1 = "Item selected is: Pickaxe";
    var txt2 = "<br>";
    var txt3 = "Code is: 4 7 1 0";
      document.getElementById("pickaxe").innerHTML = txt1 + txt2 + txt3;
}

function minecartClicked() {
    var txt1 = "Item selected is: Minecart";
    var txt2 = "<br>";
    var txt3 = "Code is: 2 0 9 2 ";
      document.getElementById("minecart").innerHTML = txt1 + txt2 + txt3;
}

function skullClicked() {
    var txt1 = "Item selected is: Skull";
    var txt2 = "<br>";
    var txt3 = "Code is: 3 8 9 2";
      document.getElementById("skull").innerHTML = txt1 + txt2 + txt3;
}

function torchClicked() {
    var txt1 = "Item selected is: Torch";
    var txt2 = "<br>";
    var txt3 = "Code is: 8 3 0 6";
      document.getElementById("torch").innerHTML = txt1 + txt2 + txt3;
}