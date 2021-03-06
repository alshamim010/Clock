setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock () {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotetion(secondHand, secondsRatio);
    setRotetion(minuteHand, minutesRatio);
    setRotetion(hourHand, hoursRatio);
}

function setRotetion(elem, rotationRatio) {
    elem.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()