//Slider 
const slide = [
  {
    id: 1,
    img: src = "https://res.cloudinary.com/mastercraft/image/upload/v1642152461/carousel_image_2_l5gsxv.png"
  },
  {
    id: 2,
    img: src = "https://res.cloudinary.com/mastercraft/image/upload/v1642152460/carousel_image_1_ntcpa4.png"
  },
];

//select image...............................................
const img = document.getElementById("social_img");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let startingSlide = 0;

window.addEventListener('DOMContentLoaded', () => {
    showSlide(startingSlide);
});

function showSlide (firstSlide) {
  const item = slide[firstSlide];
  img.src = item.img;
}

//show next slide................................................
prevBtn.addEventListener('click', () => {
  startingSlide--
  if (startingSlide < 0) {
      startingSlide = slide.length -1;
  }
  showSlide(startingSlide);
});

nextBtn.addEventListener('click', () => {
  startingSlide++
  if (startingSlide > slide.length - 1) {
      startingSlide = 0;
  }
  showSlide(startingSlide);
});


//accordion code - from w3 schools examples.
var acc = document.getElementsByClassName("accordion"); 
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// footer get year
const date = new Date();
let year = date.getFullYear();
document.getElementById('dynamicYear').innerHTML = year;


