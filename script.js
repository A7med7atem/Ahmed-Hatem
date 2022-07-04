AOS.init({
  easing: "ease-in-quad",
});

let song = document.getElementById("audioId");
let player = document.getElementsByClassName("player");
let text = getElementsByClassName("music_text");

function togglePlay() {

  if (song) {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }
}