const loadingScreen = document.getElementById("loadingScreen");
const revealScreen = document.getElementById("revealScreen");
const trollScreen = document.getElementById("trollScreen");

const loaderBar = document.getElementById("loaderBar");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");
const countdown = document.getElementById("countdown");

let progress = 0;


/* FAKE LOADING */

const loading = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 1;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loading);

        loaderBar.style.width = "100%";
        percentage.textContent = "100%";

        status.textContent = "ARCHIVE UNLOCKED.";

        setTimeout(startCountdown, 1200);
    }

    loaderBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

}, 180);


/* COUNTDOWN */

function startCountdown() {

    loadingScreen.style.display = "none";
    revealScreen.style.display = "flex";

    let number = 3;

    countdown.textContent = number;

    const timer = setInterval(() => {

        number--;

        if (number > 0) {
            countdown.textContent = number;
        }

        else {

            clearInterval(timer);

            countdown.textContent = "";

            setTimeout(() => {

                revealScreen.style.display = "none";
                trollScreen.style.display = "flex";

            }, 400);
        }

    }, 900);
}