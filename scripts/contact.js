document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const serviceID = 'service_0eoci2t'; // Reemplaza con tu serviceID de EmailJS
    const templateID = 'template_o09utxn'; // Reemplaza con tu templateID de EmailJS

    // Estos son los parámetros que pasarás a EmailJS
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensaje enviado correctamente');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
        });

    // Limpia el formulario después de enviar
    document.getElementById('contact-form').reset();
});
