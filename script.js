const video = document.getElementById("bg-video");
const controlBtn = document.getElementById("video-control");
const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  preloader.style.display = "none";
});

controlBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    controlBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});
