var user_Stone = document.getElementById("stone");
var user_Paper = document.getElementById("paper");
var user_Scissors = document.getElementById("scissors");
var user_points=0;
var system_points =0;
var myPix = [
    "images/fist.png",
    "images/hand.png",
    "images/scissors.png"
  ];

var sys_Container = document.getElementById("computer");
var play_Container = document.getElementById("player")
  console.log(myPix.length);


function invokeSystem(userOption){    
    
    var confetti = document.getElementById("container2");
    confetti.style.display= "none";
    var gmaeover = document.getElementById("container3");
    gmaeover.style.display = "none";
    var sys = choosePic();
    console.log(sys+" "+userOption);
    if(userOption=="rock"){        
    document.getElementById("player-option").src = "assets/images/fist.png";
    }
    if(userOption=="paper"){        
        document.getElementById("player-option").src = "assets/images/hand.png";
    }
    if(userOption=="scissors"){        
        document.getElementById("player-option").src = "assets/images/scissors.png";
    }


    if(userOption == sys){
             
        sys_Container.style.background = "grey";
        play_Container.style.background = "grey";

    }

    if(userOption == "rock" && sys =="scissors"){
        user_points++;
        play_Container.style.background = "green";
        sys_Container.style.background = "red";
    }
    if(userOption == "paper" && sys =="scissors"){
    system_points++;
    sys_Container.style.background = "green";
    play_Container.style.background = "red";
    }
    if(userOption == "scissors" && sys =="rock"){
        system_points++;        
        sys_Container.style.background = "green";        
        play_Container.style.background = "red";
    }
    if(userOption == "scissors" && sys =="paper"){
        user_points++;
        sys_Container.style.background = "red";        
        play_Container.style.background = "green";
    }
    if(userOption == "paper" && sys =="rock"){
        user_points++;
        sys_Container.style.background = "red";
        play_Container.style.background = "green";
    }
    if(userOption == "rock" && sys =="paper"){
        system_points++;
        sys_Container.style.background = "green";
        play_Container.style.background = "red";
    }
    var sys_score = document.getElementById("sys-result");
    var play_score = document.getElementById("play-result");
    sys_score.innerHTML = system_points;
    play_score.innerHTML = user_points;

    if(system_points<user_points && user_points>5){
        var confetti = document.getElementById("container2");
        confetti.style.display= "flex";
        system_points=0;
        user_points=0;        
        document.getElementById("system-option").src = "assets/images/rock-paper-scissors.png";
        document.getElementById("player-option").src = "assets/images/rock-paper-scissors.png";
    }
    if(system_points>=user_points && system_points>5){
        var gameover = document.getElementById("container3");
        gameover.style.display = "flex";
        system_points=0;
        user_points=0;        
        document.getElementById("system-option").src = "assets/images/rock-paper-scissors.png";
        document.getElementById("player-option").src = "assets/images/rock-paper-scissors.png";
    }
}

function choosePic() {
    var randomNum = Math.floor(Math.random()*myPix.length);
    document.getElementById("system-option").src = "assets/"+myPix[randomNum];
    console.log(randomNum+" sysy ");
    if(randomNum == 0){
        return "rock";
    }
    if(randomNum == 1){
        return "paper";
    }
    if(randomNum == 2){
        return "scissors";
    }
}