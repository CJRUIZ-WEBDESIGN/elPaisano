//Mostrar un array con algunos platillos cuando se hace clic en "Menú":
document.getElementById('navList').addEventListener('click', event => {
    if (event.target.innerHTML === "Menú") {
        mostrarMenu();
    }
});

function mostrarMenu() {
    const platillos = [
        { nombre: "Empanadas", precio: "200 ARS" },
        { nombre: "Milanesa a la napolitana", precio: "350 ARS" },
        { nombre: "Asado", precio: "500 ARS" },
        { nombre: "Empanadas", precio: "200 ARS" },
        { nombre: "Milanesa a la napolitana", precio: "350 ARS" },
        { nombre: "Asado", precio: "500 ARS" },
        { nombre: "Empanadas", precio: "200 ARS" },
        { nombre: "Milanesa a la napolitana", precio: "350 ARS" },
        { nombre: "Asado", precio: "500 ARS" },
        { nombre: "Empanadas", precio: "200 ARS" },
        { nombre: "Milanesa a la napolitana", precio: "350 ARS" },
        { nombre: "Asado", precio: "500 ARS" },
    ];

    const menuDiv = document.querySelector('.grid-menu');
    menuDiv.innerHTML = ""; // Limpiar el contenido actual

    platillos.forEach(platillo => {
        menuDiv.innerHTML += `<div class="platillo">
                                   <h3>${platillo.nombre}</h3>
                                   <p>Precio: ${platillo.precio}</p>
                              </div>`;
    });
}

//Crear un formulario de reserva y eventos para realizar una reserva:

document.getElementById('formReserva').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const cantidadPersonas = document.getElementById('cantidadPersonas').value;
    const fecha = document.getElementById('fecha').value;

    // Aquí puedes enviar los datos a un servidor o mostrar una confirmación
    alert(`Reserva realizada a nombre de ${nombre} para ${cantidadPersonas} personas el ${fecha}`);
});


//Generar un formulario de contacto con validación y enviarlo a un correo electrónico.
document.getElementById('formContacto').addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!email || !mensaje) {
        alert('Por favor completa todos los campos');
        event.preventDefault();
    }
});
