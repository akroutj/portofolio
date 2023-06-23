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

// Obtenez une référence à la div "project__box" et "project__box__overlay"
let projectBox = document.querySelector(".project__box");
let projectOverlay = document.querySelector(".project__box__overlay");

if (window.innerWidth <= 600) {
  // Ajoutez un gestionnaire d'événement de clic à la div "project__box"
  projectBox.addEventListener("click", function open() {
    // Appliquez la transformation "translateY(0px)" à la div "project__box__overlay"

    projectOverlay.style.transform = "translateY(0px)";
    projectOverlay.style.backgroundColor = "red";
  });
}
