const ratio = 0.5;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      entry.target.classList.add("left-visible");
      entry.target.classList.add("right-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".left").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".right").forEach(function (r) {
  observer.observe(r);
});

// BACK TO TOP

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var activeOverlay = null;

function handleProjectClick(event) {
  // Vérifiez la largeur de l'écran
  if (window.innerWidth <= 600) {
    var currentOverlay = event.currentTarget.querySelector(
      ".project__box__overlay"
    );

    // Réinitialiser l'état de la div précédemment active
    if (activeOverlay) {
      activeOverlay.style.transform = "translateY(250px)";
    }

    // Appliquer la transformation à la nouvelle div
    currentOverlay.style.transform = "translateY(0px)";

    // Mettre à jour la référence à la div active
    activeOverlay = currentOverlay;
  }
}
