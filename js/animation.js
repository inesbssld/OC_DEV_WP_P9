// ANIMATION TITRES

const sectionTitles = document.querySelectorAll(
  ".story h2, #characters h3, #place h3, #studio h2"
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector(".animation-titre").classList.add("animate");
      observer.unobserve(entry.target);
      return;
    }
    entry.target.querySelector(".animation-titre").classList.remove("animate");
  });
});

sectionTitles.forEach((title) => {
  const span = document.createElement("span");
  span.textContent = title.textContent;
  span.classList.add("animation-titre");
  title.innerHTML = "";
  title.appendChild(span);

  observer.observe(title);
});

sectionTitles.forEach((title) => {
  observer.observe(title);
});
// PARALLAX BANNER VIDEO - TITRE

var s = skrollr.init();

/**essai skrollr

document.addEventListener("DOMContentLoaded", function () {
  // Initialisez Skrollr
  var s = skrollr.init();

  // Ajoutez l'effet de parallax à votre élément
  var element = document.getElementById("background-video");
  var dataStart = 0; // Position de départ de l'élément
  var dataMedium = 200;
  var dataEnd = 500; // Position finale de l'élément

  // Définissez les attributs de données pour l'effet de parallax
  element.setAttribute("data-0", "transform:translateY(" + dataStart + "px)");
  element.setAttribute(
    "data-100",
    "transform:translateY(" + dataMedium + "px)"
  );
  element.setAttribute("data-1000", "transform:translateY(" + dataEnd + "px)");
});
*/
/* essai simpl parallax
const imageElement = document.querySelector(".banner__content--image");
new simpleParallax(imageElement, {
  delay: 0.6, // Ajoutez un léger délai pour un effet fluide
  orientation: "down",
  scale: 1.1, // Vous pouvez ajuster la valeur de l'échelle selon votre préférence
  transition: "cubic-bezier(0,0,0,1)",
});
*/

// Animation NUAGES

const nuageImage = document.querySelector(".place__nuages--image");
const options = {
  threshold: 0.5, // Le seuil à partir duquel l'élément est considéré comme visible
};

const nuagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const newPosition = Math.min(0, -300); // Déplace de 300px vers la gauche
      nuageImage.style.transform = `translateX(${newPosition}px)`;
    }
  });
}, options);

nuagesObserver.observe(nuageImage);

// SLIDER

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  initialSlide: 2,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 0,
  autoplay: {
    delay: 2000, // Temps en millisecondes entre chaque diapositive
    disableOnInteraction: false, // Laissez le défilement automatique continuer même si l'utilisateur interagit avec le swiper
  },
});

// MENU

const menuToggle = document.querySelector(".menu-toggle");
const menuOpen = document.querySelector(".menu__open");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("close");

  if (menuToggle.classList.contains("close")) {
    menuOpen.style.display = "block";
  } else {
    menuOpen.style.display = "none";
  }
});

const menuLinks = document.querySelectorAll(".menu__open ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuOpen.style.display = "none";
    menuToggle.classList.remove("close");
  });
});
