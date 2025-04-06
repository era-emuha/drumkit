let drumButtons = document.querySelectorAll(".drum");

function handleClick() {
    alert("Hello");
}

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
}