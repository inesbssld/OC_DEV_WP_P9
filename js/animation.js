// ANIMATION TITRES

// Sélection de tous les titres de sections à animer
const sectionTitles = document.querySelectorAll(
  ".story h2, #characters h3, #place h3, #studio h2"
);

// Create the observer
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add a class to the title's text element
      entry.target.querySelector(".animation-titre").classList.add("animate");
      // Stop observing once animation is applied to prevent repetition
      observer.unobserve(entry.target);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    entry.target.querySelector(".animation-titre").classList.remove("animate");
  });
});

// Tell the observer which elements to track (the titles)
sectionTitles.forEach((title) => {
  const span = document.createElement("span");
  span.textContent = title.textContent;
  span.classList.add("animation-titre");
  title.innerHTML = ""; // Effacer le contenu original du titre
  title.appendChild(span); // Ajouter le span au titre

  observer.observe(title);
});

// Tell the observer which elements to track (the titles)
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

// PARALLAX NUAGES

const nuageImage = document.querySelector(".place__nuages--image");
const options = {
  threshold: 0.5, // Le seuil à partir duquel l'élément est considéré comme visible
};

const nuagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const newPosition = Math.min(0, -550); // Déplace de 550px vers la gauche
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
// Sélectionnez le bouton par son sélecteur de classe
const menuToggle = document.querySelector(".menu-toggle");
const menuOpen = document.querySelector(".menu__open");

// Ajoutez un gestionnaire d'événement clic au bouton
menuToggle.addEventListener("click", function () {
  // Inversez la classe "close" sur le bouton pour indiquer si le menu est ouvert
  menuToggle.classList.toggle("close");

  // Inversez la propriété "display" du menu pour afficher ou masquer le menu
  if (menuToggle.classList.contains("close")) {
    menuOpen.style.display = "block"; // Le menu est ouvert, affichez-le
  } else {
    menuOpen.style.display = "none"; // Le menu est fermé, masquez-le
  }
});

// Sélectionnez tous les liens du menu
const menuLinks = document.querySelectorAll(".menu__open ul li a");

// Ajoutez un gestionnaire d'événement clic à chaque lien
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Fermez le menu en masquant la div .menu__open
    menuOpen.style.display = "none";

    // Assurez-vous de retirer la classe "close" du bouton toggle
    menuToggle.classList.remove("close");
  });
});
