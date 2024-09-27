const bodyElement = document.getElementById("main");

const divElement = document.createElement("div");
divElement.setAttribute("id", "container");
bodyElement.append(divElement);

const countdownElement = document.createElement("p");
countdownElement.setAttribute("id", "countdown");
countdownElement.style.display = "none";
countdownElement.textContent = "00 Months 00 Days 00 Hours 00 Minutes 00 Seconds";


const inputDate = document.createElement("input");
inputDate.setAttribute("id", "date");
inputDate.setAttribute("type", "date");


let textElement = document.createElement("p");
textElement.textContent = "When it's your birthday? 🤔"

divElement.append(textElement);
divElement.append(countdownElement);
divElement.append(inputDate);

let msDate;

inputDate.addEventListener("change", function () {
    msDate = new Date(inputDate.value).getTime();
    countdownElement.style.display = "block";
    textElement.textContent = "🎂 Your birthday is in 🎂"
});

setInterval(() => {

    if (!msDate) {

        return;
    }

    let today = new Date().getTime();
    let distance = msDate - today;

    // milisegundos per month, day, hour, minute and second
    let msPerMonth = 1000 * 60 * 60 * 24 * 30.44 /*average of days by a month*/;
    let msPerDay = (1000 * 60 * 60 * 24);
    let msPerHour = (1000 * 60 * 60);
    let msPerMinute = (1000 * 60);
    let msPerSecond = 1000;


    let monthsLeft = Math.floor(distance / msPerMonth);
    let daysLeft = Math.floor(distance / msPerDay);
    let hoursLeft = Math.floor((distance % msPerDay) / msPerHour);
    let minutesLeft = Math.floor((distance % msPerHour) / msPerMinute);
    let secondsLeft = Math.floor((distance % msPerMinute) / msPerSecond);

    //
    countdownElement.textContent = `${monthsLeft < 10 ? '0' + monthsLeft : monthsLeft} Months ` +
        `${daysLeft < 10 ? '0' + daysLeft : daysLeft} Days ` +
        `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft} Hours ` +
        `${minutesLeft < 10 ? '0' + minutesLeft : minutesLeft} Minutes ` +
        `${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft} Seconds`;

    countdownElement.classList.remove("green", "orange", "red");
    if (daysLeft >= 14) {
        countdownElement.classList.add("green");
    } else if (daysLeft >= 7) {
        countdownElement.classList.add("orange");
    } else {
        countdownElement.classList.add("red");
    }

    if (distance <= 0) {
        countdownElement.textContent = "00 Months 00 Days 00 Hours 00 Minutes 00 Seconds";
        countdownElement.classList.remove("green", "orange", "red");
        countdownElement.classList.add("red");
        return;
    }
}, 1000)

