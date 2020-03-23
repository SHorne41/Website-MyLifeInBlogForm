const NAVMAIN = document.querySelectorAll(".navMain");
const HOBBIESOPTIONS = document.querySelectorAll(".hobbies");
const TRIVIAOPTIONS = document.querySelectorAll(".trivia");

function dropdown(menuOption){
    if (menuOption.id == "hobbies"){
        for (i = 0; i < HOBBIESOPTIONS.length; i++){
            HOBBIESOPTIONS[i].style = "display: inline-block;";
        }
    }
}

function reset(menuOption){
    if (menuOption.id == "hobbies"){
        for (i = 0; i < HOBBIESOPTIONS.length; i++){
            HOBBIESOPTIONS[i].style = "display: hidden";
        }
    }
}

for (i = 0; i < NAVMAIN.length; i++){
    NAVMAIN[i].addEventListener("mouseenter", function(){dropdown(this);}, false);
    NAVMAIN[i].addEventListener("mouseleave", function(){reset(this);}, false);
}
