const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

function slideLeft() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
}

function slideRight() {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
}

leftBtn.addEventListener("click", slideLeft);
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.code === "ArrowLeft") {
    slideLeft();
  }
});

rightBtn.addEventListener("click", slideRight);
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.code === "ArrowRight") {
    slideRight();
  }
});

setBgToBody();
