 //Mostrar un array con algunos platillos cuando se hace clic en "Menú":
document.getElementById('navList').addEventListener('click', event => {
  if (event.target.innerHTML === "Menú") {
    mostrarMenu();
  }
}); 

mostrarMenu()
function mostrarMenu() {
  const platosDelDia = [
    { nombre: "Empanadas Surtidas x6", desc: "2 Jamon y queso, 2 Pollo, 2 Carne", precio: "1500 ARS", img: "./images/empanadas-congeladas-quick-frozen.png"}, 
    { nombre: "Milanesa a la Romana", desc: "Milanesa a la Romana", precio: "1350 ARS", img: "./images/milaromana.jpg" },
    { nombre: "Asado de tira", desc: "Asado de tira", precio: "2500 ARS", img: "./images/asadotira.jpg" },
    { nombre: "Empanadas Fritas de Carne", desc: "Empanadas Fritas de Carne", precio: "400 ARS", img: "./images/empanadasfritas.jpg" },
    { nombre: "Milanesa a la napolitana", desc: "Milanesa a la napolitana con guarnicion", precio: "1350 ARS", img: "./images/milanapo.jpg" },
    { nombre: "Bife a la Criolla", desc: "Bife a la Criolla con Papas", precio: "1500 ARS", img: "./images/bifecriolla.jpg" },
    { nombre: "Pizza Grande de Muzza", desc: "Pizza Grande de Muzzarella", precio: "2200 ARS", img: "./images/pizzamuzza.jpg" },
    { nombre: "Churrasco con Papa Fritas", desc: "Churrasco con Papa Fritas y Huevo Frito", precio: "1350 ARS", img: "./images/bifeconfrita.jpg" },
    { nombre: "Choripan con Fritas", desc: "Choripan con Fritas + Dip Salsa Criolla/Chimi", precio: "1500 ARS", img: "./images/choripanconfrita.jpg" },
    { nombre: "Fideos con tuco", desc: "Fideos con tuco y carne", precio: "1200 ARS", img: "./images/fiotuco.jpg" },
    { nombre: "Escalope de Merluza con Pure", desc: "Escalope de Merluza con Pure o fritas", precio: "2350 ARS", img: "./images/escalopeconpure.jpg" },
    { nombre: "Pollo al horno con papas", desc: "Pollo al horno con papas y verduras", precio: "1900 ARS", img: "./images/polloalhornoconpapa.jpg" },
  ];

  const menuDiv = document.querySelector('.grid-menu');
  menuDiv.innerHTML = "";
  
  platosDelDia.forEach(plato => {
    menuDiv.innerHTML += `
                        <div class="row row-cols-1 row-cols-md g-4">
                           <div class="col">    
                             <div class="card">
                                <div class="card-body">
                                     <div class="d-flex justify-content-center mt-3"><img src="${plato.img}" class="card-img-top" alt="${plato.nombre}"></div>
                                             <h5 class="card-title text-center">${plato.nombre}</h5>
                                             <p class="card-text">${plato.desc}</p>
                                             <b><p class="card-text">${plato.precio}</p></b>
                                </div>
                           </div>
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


//Formulario de Contacto
/* window.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactoForm');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombreInput = document.getElementById('nombre');
      const emailInput = document.getElementById('email');
      const mensajeInput = document.getElementById('mensaje');
  
      const nombreValue = nombreInput.value.trim();
      const emailValue = emailInput.value.trim();
      const mensajeValue = mensajeInput.value.trim();
  
      if (!validateEmail(emailValue)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
      }
  
      verificarCorreo(emailValue)
        .then(function(response) {
          if (response.valid) {
            enviarCorreo(nombreValue, emailValue, mensajeValue)
              .then(function(response) {
                alert('Correo enviado correctamente.');
                formulario.reset();
              })
              .catch(function(error) {
                alert('Hubo un error al enviar el correo. Por favor, intenta nuevamente.');
                console.error(error);
              });
          } else {
            alert('El correo electrónico no es válido. Por favor, verifica la dirección de correo.');
          }
        })
        .catch(function(error) {
          alert('Hubo un error al verificar el correo electrónico. Por favor, intenta nuevamente.');
          console.error(error);
        });
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function verificarCorreo(email) {
      const apiKey = 'bf34925851df4d188dd9a1edc99b2b7d'; // Reemplaza "YOUR_API_KEY" con tu clave de API de ZeroBounce
  
      const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(email)}`;
  
      return fetch(url)
        .then(function(response) {
          return response.json();
        });
    }
  
    function enviarCorreo(nombre, email, mensaje) {
      // Aquí puedes agregar el código necesario para enviar el correo utilizando tu plataforma de envío de correos preferida
      // Esto puede incluir el uso de bibliotecas como Nodemailer en un entorno de backend o servicios de envío de correos en la nube
  
      // Ejemplo de código para enviar el correo utilizando el servicio de correo SendGrid (requiere su propia configuración)
      const sendgridApiKey = 'YOUR_SENDGRID_API_KEY';
      const sendgridEndpoint = 'https://api.sendgrid.com/v3/mail/send';
  
      const data = {
        personalizations: [{
          to: [{ email: 'cjruiz2013@gmail.com' }] // Reemplaza con el correo donde deseas recibir los mensajes
        }],
        from: { email },
        subject: 'Nuevo mensaje de contacto',
        content: [{ type: 'text/plain', value: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}` }]
      };
  
      return fetch(sendgridEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sendgridApiKey}`
        },
        body: JSON.stringify(data)
      });
    }
  });
   */

/* window.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('contactoForm');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    const nombreValue = nombreInput.value.trim();
    const emailValue = emailInput.value.trim();
    const mensajeValue = mensajeInput.value.trim();

    if (!validateEmail(emailValue)) {
      mostrarAlerta('Por favor, introduce un correo electrónico válido.');
      return;
    }

    verificarCorreo(emailValue)
      .then(function (response) {
        if (response.valid) {
          enviarCorreo(nombreValue, emailValue, mensajeValue)
            .then(function () {
              mostrarAlerta('Correo enviado correctamente.');
              formulario.reset();
            })
            .catch(function (error) {
              mostrarAlerta('Hubo un error al enviar el correo. Por favor, intenta nuevamente.');
              console.error(error);
            });
        } else {
          mostrarAlerta('El correo electrónico no es válido. Por favor, verifica la dirección de correo.');
        }
      })
      .catch(function (error) {
        mostrarAlerta('Hubo un error al verificar el correo electrónico. Por favor, intenta nuevamente.');
        console.error(error);
      });
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function verificarCorreo(email) {
    // Código de verificación de correo utilizando ZeroBounce (se mantiene igual)
    // Aquí deberías agregar tu lógica de verificación de correo electrónico
  }

  function enviarCorreo(nombre, email, mensaje) {
    const serviceID = 'service_hyfon79'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'template_ygnab4s'; // Reemplaza con el ID de tu plantilla de EmailJS

    const emailData = {
      nombre,
      email,
      mensaje
    };

    return emailjs.send(serviceID, templateID, emailData);
  }

  function mostrarAlerta(mensaje) {
    alert(mensaje);
  }
});

(function () {
  emailjs.init('elpaisano.calamuchita@gmail.com'); // Reemplaza con tu User ID de EmailJS
})();
 */

