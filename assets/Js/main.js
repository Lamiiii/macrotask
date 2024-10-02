let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let next = document.querySelector("#Next");
let back = document.querySelector("#Back");

let img = document.querySelector("#img");
let images = [
  "img/flower1.webp",
  "img/flower2.avif",
  "img/flower3.jpg",
  "./img/flower4.webp",
  "img/flower6.jpg",
];
let num = 0;
let interval;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    num++;
    if (num >= images.length) {
      num = 0;
      img.src = images[num];
    } else {
      img.src = images[num];
    }
  }, 1000);
});

next.addEventListener("click", function () {
  num++;
  if (num >= images.length) {
    num = 0;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});

back.addEventListener("click", function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});
