const NAVMAIN = document.querySelectorAll(".navMain");
const HOBBIESOPTIONS = document.querySelectorAll(".hobbies");
const TRIVIAOPTIONS = document.querySelectorAll(".trivia");

function dropdown(menuOption){
    console.log(menuOption.id);
}

for (i = 0; i < NAVMAIN.length; i++){
    NAVMAIN[i].addEventListener("mouseenter", function(){dropdown(this);}, false);
}
