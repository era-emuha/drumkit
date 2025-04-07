let drumButtons = document.querySelectorAll(".drum");

function handleClick() {
    let drumSound = new Audio("sounds/crash.mp3");
    drumSound.play();
}

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
}