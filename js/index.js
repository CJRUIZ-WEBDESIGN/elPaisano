//Mostrar un array con algunos platillos cuando se hace clic en "Menú":
document.getElementById('navList').addEventListener('click', event => {
    if (event.target.innerHTML === "Menú") {
        mostrarMenu();
    }
});

function mostrarMenu() {
    const platosDelDia = [
        { nombre: "Empanadas Surtidas x6", precio: "1500 ARS" },
        { nombre: "Milanesa a la Romana", precio: "1350 ARS" },
        { nombre: "Asado de tira", precio: "2500 ARS" },
        { nombre: "Empanadas Fritas de Carne", precio: "400 ARS" },
        { nombre: "Milanesa a la napolitana", precio: "1350 ARS" },
        { nombre: "Bife a la Criolla", precio: "1500 ARS" },
        { nombre: "Pizza Grande de Muzza", precio: "2200 ARS" },
        { nombre: "Churrasco con Papa Fritas", precio: "1350 ARS" },
        { nombre: "Choripan con Fritas", precio: "1500 ARS" },
        { nombre: "Fideos con tuco", precio: "1200 ARS" },
        { nombre: "Escalope de Merluza con Pure", precio: "2350 ARS" },
        { nombre: "Pollo al horno con papas", precio: "1900 ARS" },
    ];

    const menuDiv = document.querySelector('.grid-menu');
    menuDiv.innerHTML = ""; 

    platosDelDia.forEach(plato => {
        menuDiv.innerHTML += `<div class="platillo">
                                   <h3>${plato.nombre}</h3>
                                   <p>Precio: ${plato.precio}</p>
                              </div>`;
    });
}

//Crear un formulario de reserva y eventos para realizar una reserva: Falta seguir validando datos

document.getElementById('formReserva').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const cantidadPersonas = document.getElementById('cantidadPersonas').value;
    const fecha = document.getElementById('fecha').value;

    // Aquí puedes enviar los datos a un servidor o mostrar una confirmación 
    alert(`Reserva realizada a nombre de ${nombre} para ${cantidadPersonas} personas el ${fecha}`);
});


//Generar un formulario de contacto con validación y enviarlo a un correo electrónico. Falta seguir validando datos
document.getElementById('formContacto').addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!email || !mensaje) {
        alert('Por favor completa todos los campos');
        event.preventDefault();
    }
});
