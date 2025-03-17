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
