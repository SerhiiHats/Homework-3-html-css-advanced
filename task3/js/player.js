let video = document.querySelector("#video");
let time = document.querySelector("#time");
let iconPlay = document.querySelector("#play>img");
let timeId;

function getParseTime(date) {
    const minute = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds();
    return `${minute}:${seconds}`;
}

function viewTime() {
    let milSecCurrent = video.currentTime * 1000;
    let carrentTime = getParseTime(new Date(milSecCurrent));
    let milSecTotalTime = video.duration * 1000;
    let totalTime = getParseTime(new Date(milSecTotalTime));
    time.textContent = `${carrentTime}/${totalTime}`;
}


document.querySelector("#play").onclick = (event) => {
    if (video.paused) {
        event.target.src = "icon/pause-solid.svg";
        video.play();
        timeId = setInterval(() => { viewTime() }, 1000);
        console.log(timeId)
        console.log(video.currentTime)
        console.log(video.duration)
    } else {
        event.target.src = "icon/play-solid.svg";

        video.pause();
        console.log("before", timeId)
        clearInterval(timeId);
        console.log("after", timeId)
        console.log(video.currentTime)
    }
}

document.querySelector("#backward").onclick = () => {
    video.currentTime -= 10;
    viewTime();
}

document.querySelector("#forward").onclick = () => {
    video.currentTime += 10;
    viewTime();
}

document.querySelector("#stop").onclick = (event) => {
    iconPlay.src = "icon/play-solid.svg";
    video.currentTime = 0;
    viewTime();
    video.pause();
}


document.querySelector("#volume-low").onclick = () => {
    video.volume -= 0.1;
}

document.querySelector("#volume-high").onclick = () => {
    video.volume += 0.1;
}

document.querySelector("#volume-stop").onclick = () => {
    video.volume = 0;
}