const img1 = "./user 1.jpg";
const img2 = "./user 2.jpg";
const img3 = "./user 3.png";
const img4 = "./user 4.jpg";
const img5 = "./high.jpg";

let imageArray = [img1, img2, img3, img4, img5];
const interval = 1200;

let slideVariable = document.querySelector("#slider-image");
let dots = document.querySelectorAll(".dot");

let index = 0;

function slide() {
  if (index >= imageArray.length) index = 0;
  slideVariable.src = imageArray[index];
  dotIndex(index);
  index++;
}

const dotIndex = (n) => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[n].classList.add("active");
};

setInterval(slide, interval);
slideVariable.addEventListener("load", setInterval);
