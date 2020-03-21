const CONSOLEIMAGE = document.querySelector(".consoleImage");

function flip() {
    CONSOLEIMAGE.transform = "scaleX(-1)";
}

CONSOLEIMAGE.addEventListener("click", flip(), false);
//CONSOLEIMAGE != null ? console.log("It worked!") : console.log("Try again");
