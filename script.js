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

    const songs = [
        {date: "24.02.2025", img: "saba.jpeg", src: "Saba%20&%20No%20ID%20-%20How%20to%20Impress%20God.mp3"},
        {date: "23.02.2025", img: "offshore.jpeg", src: "Touchin%20The%20Ceiling.mp3"},
        {date: "22.02.2025", img: "nasa.jpeg", src: "Rvdical%20The%20Kid%20-%20NASA%20ft.%20Amaarae%20(AUDIO).mp3"},
        {date: "21.02.2025", img: "autumn.jpeg", src: "Uptown%20Coolin!%20-%20Autumn!%20(Lyrics).mp3"},
        {date: "20.02.2025", img: "el manana.jpeg", src: "Gorillaz%20-%20El%20Ma%C3%B1ana%20(Official%20Video).mp3"},
        {date: "19.02.2025", img: "DBD bash.jpeg", src: "Bashfortheworld%20-%20Darkest%20before%20Dawn.mp3"},
        {date: "18.02.2025", img: "emph4sis.jpeg", src: "Do%20it.mp3"},
        {date: "17.02.2025", img: "lucki.png", src: "LUCKI%20-%20OF%20COURSE%20YOU%20WON%E2%80%99T%20%5BaEYCWPcpEys%5D.mp3"},
        {date: "16.02.2025", img: "beyonce.jpeg", src: "Beyonce%20&%20Maxwell%20-%20Fortunate%20Carriages%20(A%20JAYBeatz%20Mashup)%20%23HVLM.mp3"},
        {date: "15.02.2025", img: "Aaron.jpg", src: "Aaron%20May%20-%20In%20Love%20(Audio).mp3"}
    ];

    const songContainer = document.getElementById("previous-songs");
    
    songs.forEach(song => {
        const songCard = `
            <div class="col">
                <div class="card text-center">
                    <img src="${song.img}" class="card-img-top small-image" alt="cover art">
                    <div class="card-body">
                        <h5 class="card-title">${song.date}</h5>
                        <audio controls class="w-100">
                            <source src="https://github.com/bida24-087/my-song-of-the-day/raw/refs/heads/main/${song.src}" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>`;
        songContainer.innerHTML += songCard;
    });
