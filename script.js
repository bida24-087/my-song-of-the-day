document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll("audio");

    audioPlayers.forEach((audio) => {
        audio.addEventListener("play", function () {
            audioPlayers.forEach((otherAudio) => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const monthHeader = document.querySelector(".month-header");
    const monthContent = document.querySelector(".month-content");

    monthHeader.addEventListener("click", function () {
        if (monthContent.style.display === "none" || monthContent.style.display === "") {
            monthContent.style.display = "block";
            monthHeader.textContent = "February ▼";
        } else {
            monthContent.style.display = "none";
            monthHeader.textContent = "February ▲";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const monthHeader = document.querySelector(".month-header");
    const monthContent = document.querySelector(".month-content");

    monthHeader.addEventListener("click", function () {
        if (monthContent.style.display === "none" || monthContent.style.display === "") {
            monthContent.style.display = "block";
            monthHeader.textContent = "March ▼";
        } else {
            monthContent.style.display = "none";
            monthHeader.textContent = "March ▲";
        }
    });
});

