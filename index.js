
//  here we are selecting the buttons and listening the click event
for(var i=0 ;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

  
        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play()        
        var buttonInnerHtml= this.innerHTML;
       makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
    
    });



}


//    listening the keyboard event
document.addEventListener("keydown",function(event){
console.log(event);
makeSound(event.key);
buttonAnimation(event.key);
});
// function to make sounds on particular keys
function makeSound(key){

    switch(key){
        case "w":
            new Audio('./sounds/tom-1.mp3').play();
            break;
            case "a":
            new Audio('./sounds/tom-2.mp3').play();
            break;
            case "s":
            new Audio('./sounds/tom-3.mp3').play();
            break;
            case "d":
            new Audio('./sounds/tom-4.mp3').play();
            break;
            case "j":
            new Audio('./sounds/snare.mp3').play();
            break;
            case "k":
            new Audio('./sounds/crash.mp3').play();
            break;
            case "l":
            new Audio('./sounds/kick-bass.mp3').play();
            break;
    
            default: console.log(this);
    }  


}
function buttonAnimation(currentkey){

    var acitveElement = document.querySelector("."+currentkey);
    acitveElement.classList.add("pressed");


    setTimeout(function(){
        acitveElement.classList.remove("pressed");
    },100);
}

// document.getElementsByClassName("drum").addEventListener("click",function(){

//     alert("INSIDE GET CLASSNAME");
// });