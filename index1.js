let flag = 0;

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  //    console.log(slides)
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (i of slides) {
    i.style.display = "none";
  }
  slides[num].style.display = "block";
}

slideshow(flag);

function arrowcontrer(x) {
  flag += x;
  slideshow(flag);
}
// watchpart
let containerwatch = document.getElementById("containerwatch");
var countdowndate = new Date("feb 28,2023 00:00:00").getTime();
var x = setInterval(() => {
  var now = new Date().getTime();
  var distace = countdowndate - now;
  var days = Math.floor(distace / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var mint = Math.floor((distace % (1000 * 60 * 60)) / (1000 * 60));

  var sec = Math.floor((distace % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("Hour").innerHTML = hours;
  document.getElementById("min").innerHTML = mint;

  document.getElementById("sec").innerHTML = sec;
}, 1000);
// ********************************************
var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
