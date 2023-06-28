document.getElementById('btnBuscar').addEventListener('click', () => {
    const termino = document.getElementById('terminoBusqueda').value;
    const resultados = buscarProducto(termino);
    // Aquí puedes renderizar los resultados en la sección de resultados
});

// Aquí puedes agregar eventos para los botones de agregar y eliminar del carrito.
document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.btnAgregar');
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const nombreProducto = e.target.dataset.nombre;
            agregarAlCarrito({nombre: nombreProducto});
            alert('Agregado al carrito');
        });
    });
});

function obtenerProductos() {
    fetch(URL) 
    .then((respuesta)=> console.log(respuesta)) // Controlamos el asincronismo de la peticion fetch
    .then((data)=> productos.push(...data) )
    .then((error)=> console.error("Error"))
} 