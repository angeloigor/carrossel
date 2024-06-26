const box = document.querySelector(".container");
const images = document.querySelectorAll(".container img");
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;

function updateSlider() {
  const width = box.clientWidth / images.length;
  box.style.transform = `translateX(${-index * width}px)`;
}

function slider() {
  index = (index + 1) % images.length;
  updateSlider();
}

setInterval(slider, 5000);

prevButton.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : images.length - 1;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateSlider();
});
