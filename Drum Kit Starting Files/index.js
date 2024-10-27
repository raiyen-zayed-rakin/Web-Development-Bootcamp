// document.querySelector("button").addEventListener("click", function (){
//     alert("I got click")

//     //What to do when click detected
// });

allButtons = document.querySelectorAll(".drum");
// console.log(allButtons)

for (var i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", function (){
       
        var audio = new Audio(`sounds/tom-1.mp3`)
        audio.play();
    }); 
}


