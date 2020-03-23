const NAVOPTIONS = document.querySelectorAll(".navOptions");

function dropdown(menuOption){
    console.log(menuOption.id);
}

for (i = 0; i < NAVOPTIONS.length; i++){
    NAVOPTIONS[i].addEventListener("mouseenter", function(){dropdown(this);}, false);
}
