let drumButtons = document.querySelectorAll(".drum");

// Plays sound based on key
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
}

// Mouse click handler
function handleClick() {
    let buttonKey = this.innerHTML;
    playSound(buttonKey);
}

// Add click event listeners to buttons
drumButtons.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Keyboard press handler
document.addEventListener("keydown", function(event) {
    playSound(event.key);
});