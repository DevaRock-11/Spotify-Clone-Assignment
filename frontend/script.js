// Step 1: Create audio player
let audio = new Audio();
let isPlaying = false;

// Step 2: Get all song cards
let cards = document.querySelectorAll(".card");

// Step 3: Get text area for current song
let currentSongText = document.getElementById("currentSong");

// Step 4: Add click event to each card
cards.forEach(card => {
  card.addEventListener("click", () => {

    // Get song details from HTML
    let songPath = card.getAttribute("data-song");
    let songTitle = card.getAttribute("data-title");

    // Load and play song
    audio.src = songPath;
    audio.play();

    isPlaying = true;

    // Show song name
    currentSongText.innerText = "Playing: " + songTitle;
  });
});

// Step 5: Pause / Resume using Space key
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();

    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      currentSongText.innerText = "Paused";
    } else {
      audio.play();
      isPlaying = true;
    }
  }
});
