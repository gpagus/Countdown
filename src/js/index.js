const bodyElement = document.getElementById("main");
const countdownElement = document.createElement("div");
countdownElement.setAttribute("class", "countdown");
const textElement = document.createElement("div");
textElement.setAttribute("class", "text");
bodyElement.append(textElement);
bodyElement.append(countdownElement);

let date = new Date("01/01/2025");
let msDate = date.getTime();

setInterval(() => {
    let today = new Date().getTime;
    let distance = msDate - today;
    let msPerDay = (1000 * 60 * 60 * 24);
    let msPerHour = (1000 * 60 * 60);
    let msPerMinute = (1000 * 60);
    let msPerSecond = 1000;

    let daysLeft = Math.floor(distance / msPerDay);
}, 1000)

