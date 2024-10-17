function registrarUsuario() {
    // Obtener valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const numDocumento = document.getElementById('numDocumento').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const registroMensaje = document.getElementById('registroMensaje');
    
    // Validación
    let isValid = true;
    let mensaje = '';
  
    if (!nombres || !apellidos) {
      isValid = false;
      mensaje += 'Nombres y apellidos son requeridos. ';
    }
    if (!tipoDocumento) {
      isValid = false;
      mensaje += 'Tipo de documento es requerido. ';
    }
    if (!numDocumento || isNaN(numDocumento)) {
      isValid = false;
      mensaje += 'Número de documento es requerido y debe ser numérico. ';
    }
    if (celular.length < 10 || isNaN(celular)) {
      isValid = false;
      mensaje += 'Celular debe tener al menos 10 dígitos y debe ser numérico. ';
    }
    if (!validateEmail(correo)) {
      isValid = false;
      mensaje += 'Correo electrónico no es válido. ';
    }
  
    // Mostrar mensaje de estado
    if (isValid) {
      registroMensaje.textContent = 'Registro exitoso.';
      registroMensaje.style.color = 'green';
    } else {
      registroMensaje.textContent = mensaje;
      registroMensaje.style.color = 'red';
    }
  
    registroMensaje.style.display = 'block';
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const showCards = () => {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 50) { // Ajusta el valor para que aparezcan antes o después
                card.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', showCards);
    showCards(); // Llama a la función al cargar la página
});
