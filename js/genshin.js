// Genshin JS

let playButton=document.getElementById("play");
let video=document.getElementById("videoplayer");
function playVideo(){
    video.play();
}
playButton.addEventListener('click',playVideo);

let pauseButton=document.getElementById("pause");
function pauseVideo(){
    video.pause();
}
pauseButton.addEventListener('click',pauseVideo);

function loadvideo(){
video.load();
video.autoplay = true;
video.loop = true;
}
window.addEventListener('load', loadvideo)