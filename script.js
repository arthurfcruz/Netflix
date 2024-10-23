let soundButton = document.querySelector(".soundbutton")
let soundOff = document.querySelector(".soundOff")
let video = document.querySelector(".video")
let infoButton = document.querySelector(".linkinfo")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

soundButton.addEventListener("click", soundOn)
soundOff.addEventListener("click", soundMuted)

function soundOn(){
    video.muted = false
}

function soundMuted(){
    video.muted = true
}

infoButton.addEventListener("click", showInfo)
modal.addEventListener("click", hideInfo)

function showInfo(){
    modal.style.display = "block"
}

function hideInfo(){
    modal.style.display = "none"
}

window.addEventListener("load", playAudio)

function playAudio(){
    audio.play()
}