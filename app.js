const carrusel = document.querySelector(".carrusel-items");

const gallery = [
  {
    img: "./image/gallery1.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery2.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery3.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery4.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery5.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery6.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery7.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery8.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery9.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery10.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery11.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery12.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery13.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery14.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery15.jpeg",
    alt: "Gallery Image",
  },


]

window.addEventListener("DOMContentLoaded", function() {
  let displayGallery = gallery.map(function(item) {
    return `<div class="carrusel-item">
              <img src="${item.img}" alt="${item.alt}">
            </div>`;
  });
  displayGallery = displayGallery.join("");
  carrusel.innerHTML = displayGallery;

  start(); // Iniciar el slider después de cargar las imágenes
});

let intervalo = null;
let step = 1;

const start = () => {
  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
  
  intervalo = setInterval(() => {
    carrusel.scrollLeft += step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step *= -1;
    } else if (carrusel.scrollLeft === 0) {
      step *= -1;
    }
  }, 1);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});
