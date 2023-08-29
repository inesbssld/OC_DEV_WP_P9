/*

// Create the observer
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("animation-titre");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animation-titre");
  });
});
// Tell the observer which elements to track
observer.observe(document.querySelector(".animation-titre"));

*/

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

// effet parallax video - titre

document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.querySelector(".banner__content");

  // Initialisez l'effet de parallaxe avec une vitesse de 2
  new simpleParallax(imageElement, {
    delay: 0.6, // Ajoutez un léger délai pour un effet fluide
    orientation: "down",
    scale: 1.8,
    transition: "cubic-bezier(0,0,0,1)",
  });
});

// effet parallax nuages

const nuageImage = document.querySelector(".place__nuages--image");
const options = {
  threshold: 0.5, // Le seuil à partir duquel l'élément est considéré comme visible
};

const nuagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const newPosition = Math.min(0, -550); // Déplace de 300px vers la gauche
      nuageImage.style.transform = `translateX(${newPosition}px)`;
    }
  });
}, options);

nuagesObserver.observe(nuageImage);

// slider

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
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
    delay: 3000, // Temps en millisecondes entre chaque diapositive
    disableOnInteraction: false, // Laissez le défilement automatique continuer même si l'utilisateur interagit avec le swiper
  },
});
