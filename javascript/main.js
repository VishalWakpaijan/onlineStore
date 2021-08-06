let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const overlay = document.getElementById("overlay");

searchBtn.addEventListener("click", () => {
  searchBar.classList.add("searchBar_active");
  overlay.classList.add("overlay_active");
});

overlay.addEventListener("click", () => {
  searchBar.classList.remove("searchBar_active");
  overlay.classList.remove("overlay_active");
});

const submitFunction = () => {
  alert("Thank you for visting");
};
