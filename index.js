var numberOfdrum = document.querySelectorAll(".drum").length;

// make sound when the key get click by mouse
for( var i = 0; i < numberOfdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var clickword = this.innerHTML;
        sound(clickword);
        buttonAnimation(clickword);
    });
}

// make sound when the key get click on key board 
var make = document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);
});

// if else satatement
function sound(key){
    if(key === "w"){
        var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
    } else if(key === "a"){
        var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
    } else if(key === "s"){
        var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
    } else if(key === "d"){
        var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
    } else if(key === "f"){
        var crash = new Audio("sounds/crash.mp3");
         crash.play();
    } else if(key === "g"){
        var kickbass = new Audio("sounds/kick-bass.mp3");
         kickbass.play();
    } else if(key === "h"){
        var snare = new Audio("sounds/snare.mp3");
         snare.play();
    } else {
        console.log("no input found");
    }
}

// creating an animation when the key get press
function buttonAnimation(presskey){
    var activebutton = document.querySelector("." + presskey);
    activebutton.classList.add("pressed");
     setTimeout(function(){
        activebutton.classList.remove("pressed");
     }, 100);
}

// function sound(key){
//    switch(key){
//     case "w":
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//     break;

//     case "a":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//     break;

//     case "s":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//     break;

//     case "d":
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//     break;

//     case "f":
//     var kickbass = new Audio("sounds/kick-bass.mp3");
//     kickbass.play();
//     break;

//     case "g":
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//     break;

//     case "h":
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//     break;

//     default: console.log(clickword);
//    }
// }