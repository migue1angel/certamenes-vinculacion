// Configuración del carrusel
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Muestra la imagen actual
function showSlide(index) {
  const totalItems = items.length;
  if (index >= totalItems) {
    currentIndex = 0; // Reiniciar al inicio
  } else if (index < 0) {
    currentIndex = totalItems - 1; // Ir al final
  } else {
    currentIndex = index;
  }
  // Mover el carrusel
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Avanzar automáticamente cada 6 segundos
setInterval(() => showSlide(currentIndex + 1), 6000);

