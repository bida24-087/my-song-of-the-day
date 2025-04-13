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

    const monthContainers = document.querySelectorAll(".month-container");

    monthContainers.forEach((container) => {
        const header = container.querySelector(".month-header");
        const content = container.querySelector(".month-content");

        header.addEventListener("click", function () {
            const isVisible = content.style.display === "block";

            content.style.display = isVisible ? "none" : "block";

            const monthName = header.textContent.split(" ")[0];
            header.textContent = `${monthName} ${isVisible ? "▲" : "▼"}`;
        });
    });
});
