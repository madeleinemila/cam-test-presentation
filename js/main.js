let count = 1;

const nextSlide = function() {
  const current = document.getElementById(`slide${ count }`);
  const next = document.getElementById(`slide${ count + 1 }`);
  if (next) {
    current.style.display = "none";
    next.style.display = "flex";
    count++;
  }
};

const prevSlide = function() {
  const current = document.getElementById(`slide${ count }`);
  const prev = document.getElementById(`slide${ count - 1 }`);
  if (prev) {
    current.style.display = "none";
    prev.style.display = "flex";
    count--;
  }
};

document.addEventListener('keyup', function(e) {
  switch (e.key) {
    case "ArrowRight":
      nextSlide();
      break;
    case "ArrowLeft":
      prevSlide();
      break;
    case "ArrowUp":
      video.play();
      break;
    case "ArrowDown":
      video.volume -= 0.05;
      break;
  }
});

let video;
document.addEventListener("DOMContentLoaded", function() {
  video = document.getElementsByTagName('video')[0];
});
