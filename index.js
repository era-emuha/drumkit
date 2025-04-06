let nOfDrums = document.querySelectorAll(".drum").length

for (let index = 0; index < nOfDrums; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick);

    function handleClick() {
        alert("Hello");
    }

}