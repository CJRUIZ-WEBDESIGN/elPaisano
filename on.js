document.addEventListener('DOMContentLoaded', function() {
    // Aquí se puede agregar interacción, por ejemplo, cargar platillos desde una API o mostrar un mapa con la ubicación del local.
});

// ... (El código Javascript anterior) ...

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
});

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por completar la encuesta. Valoramos tus comentarios.');
});

// ... (El código Javascript anterior) ...

// Array con el Menú
const menuItems = [
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    { name: 'Platillo 1', description: 'Descripción 1' },
    // ... (20 items en total)
];

// Mostrar el Menú en la página
const menuList = document.getElementById('menu-list');
menuItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.description}`;
    menuList.appendChild(listItem);
});

// Configurar el Formulario de Reserva
const dishSelect = document.getElementById('dish');
menuItems.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = item.name;
    dishSelect.appendChild(option);
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tu reserva ha sido realizada con éxito.');
});

// Configurar el Slider de Platillos Destacados
const featuredDishes = [
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    { name: 'Platillo Destacado 1', imageUrl: 'url-1' },
    // ... (otros platillos destacados)
];

let currentSlide = 0;

const slideContainer = document.getElementById('slide-container');
featuredDishes.forEach(dish => {
    const slide = document.createElement('div');
    slide.style.backgroundImage = `url(${dish.imageUrl})`;
    slideContainer.appendChild(slide);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + featuredDishes.length) % featuredDishes.length;
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Inicializar el Slider
changeSlide(0);

