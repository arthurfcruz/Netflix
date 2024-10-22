let soundButton = document.querySelector(".soundbutton")
let video = document.querySelector(".video")

soundButton.addEventListener("click", soundOn)

function soundOn(){
    video.muted = false
}