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
