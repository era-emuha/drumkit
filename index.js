let drumButtons = document.querySelectorAll(".drum");
let nOfDrums = drumButtons.length;

function handleClick() {
    alert("Hello");
}

for (let index = 0; index < nOfDrums; index++) {
    drumButtons[index].addEventListener("click", handleClick);
}