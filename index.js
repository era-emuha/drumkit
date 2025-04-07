let drumButtons = document.querySelectorAll(".drum");

function handleClick() {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
}

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
}