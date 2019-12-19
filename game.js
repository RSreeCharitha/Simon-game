let btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let randomChosenColour = btnColors[nextSequence()]

gamePattern.push(randomChosenColour);


function nextSequence(){
  let rand = Math.floor(Math.random()*4)
  return rand;
}
/*JQuery Section
$("btn").click(function(){
  this.addClass(".pressed");
});*/

for(let i=0;i<4;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    ltr = this.id;
    console.log(ltr);
    makeSound(ltr);
    btnAnimation(ltr);
  userClickedPattern.push(ltr)
console.log(userClickedPattern);});
}


function makeSound(key){
  let audio;
  switch (key) {
      case "red":
          audio = new Audio("sounds/red.mp3");
          audio.play();
          break;
      case "blue":
          audio = new Audio("sounds/blue.mp3");
          audio.play();
          break;
      case "green":
          audio = new Audio("sounds/green.mp3");
          audio.play();
          break;
      case "yellow":
          audio = new Audio("sounds/yellow.mp3");
          audio.play();
          break;

      default: console.log(key);
  }
}

function btnAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 70);
}
