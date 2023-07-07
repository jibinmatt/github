const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

// setTimeout(decrement(), 1000)

/*
function decrement() {
    seconds--
    seconds.innerHTML = seconds
    if (seconds == 0) {
        seconds.innerHTML = 59
        minutes--
        minutes.innerHTML = minutes
        if (minutes == 0) {
            minutes.innerHTML = 59
            hours--
            hours.innerHTML = hours
            if (hours == 0) {
                hours.innerHTML = 24
                days--
                days.innerHTML = days
                if (days == 0) {
                    clearInterval()
                }
            }
        }
    }
}
*/

let countDownDate = new Date("Jul 6, 2023 16:37:52").getTime();

let myfunc = setInterval(function() {

    let currentTime = new Date().getTime();
    let timeleft = countDownDate - currentTime;

    let daysC = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hoursC = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesC = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsC = Math.floor((timeleft % (1000 * 60)) / 1000);

    days.innerHTML = formatNumber(daysC)
    hours.innerHTML = formatNumber(hoursC) 
    minutes.innerHTML = formatNumber(minutesC)
    seconds.innerHTML = formatNumber(secondsC)

    if (timeleft < 0) {
        clearInterval(myfunc);
        days.innerHTML = "" 
        hours.innerHTML = "" 
        minutes.innerHTML = ""
        seconds.innerHTML = ""
    }

}, 1000);

let formatNumber = (num) => (num).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
