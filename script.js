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


    const songs = {
        "15": { title: "In Love - Aaron May", cover: "Aaron.jpg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Aaron%20May%20-%20In%20Love%20(Audio).mp3" },
        "16": { title: "Fortunate Carriages - Beyoncé & Maxwell", cover: "beyonce.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Beyonce%20&%20Maxwell%20-%20Fortunate%20Carriages%20(A%20JAYBeatz%20Mashup)%20%23HVLM.mp3" },
        "17": { title: "Of Course You Won't - Lucki", cover: "lucki.png", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/LUCKI%20-%20OF%20COURSE%20YOU%20WON%E2%80%99T%20%5BaEYCWPcpEys%5D.mp3" },  // <-- Fixed missing comma
        "18": { title: "Do it - Emph4sis", cover: "emph4sis.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Do%20it.mp3" },
        "19": { title: "Darkest before dawn - Bashfortheworld", cover: "bashfortheworld", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Bashfortheworld%20-%20Darkest%20before%20Dawn.mp3" },
        "20": { title: "El Manana - Gorillaz", cover: "el manana.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Gorillaz%20-%20El%20Ma%C3%B1ana%20(Official%20Video).mp3" },
        "21": { title: "Uptown Cooling! - Autumn!", cover: "autumn.png", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Uptown%20Coolin!%20-%20Autumn!%20(Lyrics).mp3" },
        "22": { title: "Nasa - Amaarae ft Rvdical The Kid", cover: "nasa.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Rvdical%20The%20Kid%20-%20NASA%20ft.%20Amaarae%20(AUDIO).mp3" },
        "23": { title: "Touchin the Ceiling - Offshore", cover: "offshore.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Touchin%20The%20Ceiling.mp3" },
        "24": { title: "How to Impress God - Saba ft No ID", cover: "saba.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Saba%20&%20No%20ID%20-%20How%20to%20Impress%20God.mp3" }
    };

    function createCalendar() {
        const calendar = document.getElementById("calendar");
        const daysInMonth = 29;
        const firstDayOffset = 6;

        for (let i = 0; i < firstDayOffset; i++) {
            calendar.innerHTML += `<div class='day'></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const hasSong = songs[day] ? "song" : "";
            calendar.innerHTML += `<div class='day ${hasSong}' data-day='${day}'>${day}</div>`;
        }

        document.querySelectorAll(".day.song").forEach(day => {
            day.addEventListener("click", function () {
                const dayNum = this.getAttribute("data-day");
                const song = songs[dayNum];
                if (song) {
                    document.getElementById("song-title").textContent = song.title;
                    document.getElementById("song-cover").src = song.cover;
                    document.getElementById("audio-player").src = song.src;
                    document.getElementById("player").style.display = "block";
                }
            });
        });
    }

    createCalendar();
});
