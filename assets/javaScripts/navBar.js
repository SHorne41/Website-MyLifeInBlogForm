const SECONDLAYER = document.querySelectorAll("li.conflict");
const THIRDLAYER = document.querySelectorAll("ul.conflict");

console.log(THIRDLAYER);

function hide(disable){
    if (disable.id == "homeConsole"){
        for (i = 0; i < THIRDLAYER.length; i++){
            if(THIRDLAYER[i].id == "home"){
                THIRDLAYER[i].style = "display: none;";
            }
        }
    }
    else if (disable.id == "handheldConsole"){
        for (i = 0; i < THIRDLAYER.length; i++){
            if(THIRDLAYER[i].id == "travel"){
                THIRDLAYER[i].style = "display: none;";
            }
        }
    }
}

function show(enable){
    if (enable.id == "homeConsole"){
        for (i = 0; i < THIRDLAYER.length; i++){
            if(THIRDLAYER[i].id == "home"){
                THIRDLAYER[i].style = "display: block;";
            }
        }
    }
    else if (enable.id == "handheldConsole"){
        for (i = 0; i < THIRDLAYER.length; i++){
            if(THIRDLAYER[i].id == "travel"){
                THIRDLAYER[i].style = "display: block;";
            }
        }
    }
}

for (i = 0; i < SECONDLAYER.length; i++){
    SECONDLAYER[i].addEventListener("mouseleave", function(){hide(this)}, false);
    SECONDLAYER[i].addEventListener("mouseenter", function(){show(this)}, false);
}
