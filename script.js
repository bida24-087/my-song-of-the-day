 document.addEventListener("DOMContentLoaded", function () {
        const audioElements = document.querySelectorAll("audio");
        
        audioElements.forEach(audio => {
            audio.addEventListener("play", function () {
                audioElements.forEach(otherAudio => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                    }
                });
            });
        });
    });

<script> //calendar
        const songs = {
            "15": { title: "In Love - Aaron May", cover: "Aaron.jpg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Aaron%20May%20-%20In%20Love%20(Audio).mp3" },
            "16": { title: "Fortunate Carriages - Beyoncé & Maxwell", cover: "beyonce.jpeg", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/Beyonce%20&%20Maxwell%20-%20Fortunate%20Carriages%20(A%20JAYBeatz%20Mashup)%20%23HVLM.mp3" },
            "17": { title: "Of Course You Won't - Lucki", cover: "lucki.png", src: "https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/LUCKI%20-%20OF%20COURSE%20YOU%20WON%E2%80%99T%20%5BaEYCWPcpEys%5D.mp3" }
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
        }

        document.addEventListener("DOMContentLoaded", () => {
            createCalendar();
            document.querySelectorAll(".day.song").forEach(day => {
                day.addEventListener("click", function() {
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
        });
    </script>
