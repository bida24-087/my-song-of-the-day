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
    if (currentDisplay === "none") {
        content.style.display = "inline-block";
        header.textContent = header.textContent.replace("▲", "▼");
      } else {
        content.style.display = "none";
        header.textContent = header.textContent.replace("▼", "▲");
      }
    });
  });
});
