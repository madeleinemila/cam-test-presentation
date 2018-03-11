let count = 1;

const nextSlide = function() {
  const current = document.getElementById(`slide${ count }`);
  const next = document.getElementById(`slide${ count + 1 }`);
  if (next) {
    current.style.display = "none";
    next.style.display = "block";
    count++;
  }
};

const prevSlide = function() {
  const current = document.getElementById(`slide${ count }`);
  const prev = document.getElementById(`slide${ count - 1 }`);
  if (prev) {
    current.style.display = "none";
    prev.style.display = "block";
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
  }
});
