const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

let countDownDate = new Date("Jul 27, 2023 13:07:52").getTime();

let myfunc = setInterval(function() {

    let currentTime = new Date().getTime();
    let timeLeft = countDownDate - currentTime;

    let daysC = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursC = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesC = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsC = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.innerHTML = formatNumber(daysC)
    hours.innerHTML = formatNumber(hoursC) 
    minutes.innerHTML = formatNumber(minutesC)
    seconds.innerHTML = formatNumber(secondsC)

    if (timeLeft < 0) {
        clearInterval(myfunc);
        days.innerHTML = "00"
        hours.innerHTML = "00" 
        minutes.innerHTML = "00"
        seconds.innerHTML = "00"
    }

    /*

    // animation //
    const secondsFlip = document.querySelector(".seconds-flip");
    const minutesFlip = document.querySelector(".minutes-flip");
    const hoursFlip = document.querySelector(".hours-flip");
    const daysFlip = document.querySelector(".days-flip");
    
    secondsFlip.classList.add("animation");

    if (secondsC == 0) {
        minutesFlip.classList.add("animation");
    } else {
        minutesFlip.classList.remove("animation");
    }

    if (secondsC==0 && minutesC==0) {
        hoursFlip.classList.add("animation");
    } else {
        hoursFlip.classList.remove("animation");
    }

    if (secondsC==0 && minutesC==0 && hoursC==0) {
        daysFlip.classList.add("animation");
    } else {
        daysFlip.classList.remove("animation");
    }
    
    */

}, 1000);

let formatNumber = (num) => (num).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})


