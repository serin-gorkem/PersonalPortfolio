var darkButton = document.getElementById("dark");
var lightButton = document.getElementById("light");
var solarButton = document.getElementById("solar");
var dropdown = document.getElementById("theme-change");
var body = document.body;

dropdown.onclick = () => {
  dropdown.classList.replace("nav-link-faded", "nav-link-faded");
};
/*Apply the cached theme on reload*/
const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

/* Button Event Handlers*/
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  solarButton.style.cssText = " --bg-solar: var(--blue);";
  solarButton.innerText = "Solarize";
  localStorage.setItem("theme", "dark");
};
lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  solarButton.style.cssText = " --bg-solar: var(--green);";
  solarButton.innerText = "Solarize";
  localStorage.setItem("theme", "light");
};
solarButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    localStorage.removeItem("isSolar");
    if (body.classList.contains("light")) {
      solarButton.style.cssText = " --bg-solar: var(--green);";
      solarButton.innerText = "Solarize";
    } else {
      solarButton.style.cssText = " --bg-solar: var(--blue);";
      solarButton.innerText = "Solarize";
    }
  } else {
    localStorage.setItem("isSolar", true);
    solarButton.style.cssText = " --bg-solar: white;";
    body.classList.add("solar");
  }
};

function reveal() {
  var reveals = document.querySelectorAll(".page");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

var dropdown = document.querySelector(".dropdown-btn");
dropdown.addEventListener("click", function () {
  var dropdown = document.querySelector(".dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

let slideIndex = 1;
showSlides(slideIndex);
setInterval(showSlidesInTime, 10000);

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
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-slide";
}
function showSlidesInTime() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length == slideIndex) {
    slides[slideIndex - 1].style.display = "none";
    slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    return 0;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }

  slides[slideIndex - 1].style.display = "none";
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active-slide";

  slideIndex++;
}

var loader = document.getElementById("loading");
var loaderBg = document.getElementById("pre-loader");

window.addEventListener("load", function () {
  setTimeout(displayNone, 1000);
});

function displayNone() {
  loader.style.display = "none";
  loaderBg.style.display = "none";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";

}
