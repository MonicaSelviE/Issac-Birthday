/* =========================
   ELEMENTS
========================= */

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const memories = document.getElementById("memories");
const cakeSection = document.getElementById("cakeSection");
const verseSection = document.getElementById("verseSection");
const letterSection = document.getElementById("letterSection");

const gift = document.getElementById("gift");

const balloonContainer =
    document.getElementById("balloonContainer");

const balloonButton =
    document.getElementById("balloonButton");

const cakeButton =
    document.getElementById("cakeButton");

const blowButton =
    document.getElementById("blowButton");

const letterButton =
    document.getElementById("letterButton");

const music =
    document.getElementById("music");


/* =========================
   SCREEN CHANGE
========================= */

function showScreen(screen) {

    document.querySelectorAll(".screen")
        .forEach(section => {
            section.classList.remove("active");
        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   GIFT
========================= */

gift.addEventListener("click", function () {

    showScreen(birthday);

    createBalloons();

    music.volume = 0.4;

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

});


/* =========================
   BALLOONS
========================= */

let balloonsPopped = 0;

const totalBalloons = 10;

function createBalloons() {

    balloonContainer.innerHTML = "";

    balloonsPopped = 0;

    for (let i = 0; i < totalBalloons; i++) {

        const balloon =
            document.createElement("div");

        balloon.classList.add("balloon");

        if (i % 2 === 0) {
            balloon.classList.add("gold");
        } else {
            balloon.classList.add("white");
        }

        balloon.style.left =
            Math.random() * 90 + "%";

        balloon.style.top =
            10 + Math.random() * 70 + "%";

        balloon.style.animationDelay =
            Math.random() * 2 + "s";

        balloon.addEventListener(
            "click",
            function () {

                if (balloon.classList.contains("popped")) {
                    return;
                }

                balloon.classList.add("popped");

                balloonsPopped++;

                if (balloonsPopped === totalBalloons) {

                    setTimeout(() => {

                        balloonButton.innerText =
                            "❤️ Memories Revealed!";

                        setTimeout(() => {
                            showScreen(memories);
                        }, 1000);

                    }, 400);

                }

            }
        );

        balloonContainer.appendChild(balloon);
    }

}


/* =========================
   BALLOON BUTTON
========================= */

balloonButton.addEventListener(
    "click",
    function () {

        const balloons =
            document.querySelectorAll(".balloon");

        balloons.forEach(balloon => {

            if (!balloon.classList.contains("popped")) {

                balloon.classList.add("popped");

                balloonsPopped++;

            }

        });

        setTimeout(() => {
            showScreen(memories);
        }, 600);

    }
);


/* =========================
   MEMORIES → CAKE
========================= */

cakeButton.addEventListener(
    "click",
    function () {

        showScreen(cakeSection);

    }
);


/* =========================
   BLOW CANDLES
========================= */

blowButton.addEventListener(
    "click",
    function () {

        const candles =
            document.querySelectorAll(".candle");

        candles.forEach((candle, index) => {

            setTimeout(() => {

                candle.classList.add("off");

            }, index * 250);

        });


        blowButton.innerText =
            "✨ Wish Made! ❤️";


        setTimeout(() => {

            showScreen(verseSection);

        }, 1600);

    }
);


/* =========================
   BIBLE VERSE → LETTER
========================= */

letterButton.addEventListener(
    "click",
    function () {

        showScreen(letterSection);

    }
);


/* =========================
   MARRIAGE COUNTER
========================= */

/*
   Wedding date:
   May 28, 2026

   Change the time here if you know
   the exact wedding time.
*/

const marriageDate =
    new Date("2026-05-28T00:00:00");


function updateCounter() {

    const now = new Date();

    const difference =
        now - marriageDate;


    if (difference < 0) {
        return;
    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(
            totalSeconds / (60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (totalSeconds % (60 * 60 * 24))
            / (60 * 60)
        );


    const minutes =
        Math.floor(
            (totalSeconds % (60 * 60))
            / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days")
        .innerText = days;


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");

}


updateCounter();

setInterval(updateCounter, 1000);