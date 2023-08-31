document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll(".play .fa-play");
  
    playButtons.forEach((playButton, index) => {
      const audioPlayer = document.getElementById(`music${index + 1}`);
      playButton.addEventListener("click", () => togglePlay(audioPlayer, playButton));
    });
  
    function togglePlay(audio, playButton) {
      if (audio.paused) {
        audio.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
      } else {
        audio.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
      }
      
    }
      // Arama işlevselliği ekleyin
  const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll(".list .item");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.trim().toLowerCase();
    items.forEach(item => {
      const title = item.querySelector("h4").textContent.toLowerCase();
      const artist = item.querySelector("p").textContent.toLowerCase();
      if (title.includes(searchText) || artist.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

  