let nOfDrums = document.querySelectorAll(".drum").length;

function handleClick() {
    alert("Hello");
}

for (let index = 0; index < nOfDrums; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick);
}