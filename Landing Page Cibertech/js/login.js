document.addEventListener('DOMContentLoaded',()=>{
const sectionUser = document.getElementById('sectionUser');
const userButton = document.getElementById('user');
const closeButton = document.getElementById('bottonCerrar');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showUserMenu=document.getElementById('userMenu');
const closeSignUpButton=document.getElementById('closeSignUp');



// Mostrar y ocultar la sección de usuario
userButton.addEventListener('click', () => {
    sectionUser.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    sectionUser.style.display = 'none';
});

// Registro de usuario
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value; // Aquí deberías tener un input de contraseña en el registro.

    if (name && email && password) {
        localStorage.setItem(email, password);
        localStorage.setItem(`${email}_name`, name); // Almacenar el nombre asociado al email
        alert('Usuario registrado con éxito');
        registerForm.reset(); // Limpiar el formulario después del registro
        loginForm.style.display = 'block'; // Mostrar el formulario de inicio de sesión
    } else {
        alert('Por favor completa todos los campos');
    }
});

// Inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(email);
    
    

    if (storedPassword && storedPassword === password) {
        alert('Inicio de sesión exitoso');
        sectionUser.style.display = 'none'; // Ocultar la sección de usuario al iniciar sesión
        showUserMenu.style.display = 'block';
        userButton.style.display = 'none';
        const storedName= localStorage.getItem(`${email}_name`);
        document.getElementById('showName').innerText = storedName;
        

    } else {
        alert('Correo o contraseña incorrectos');
    }
});

closeSignUpButton.addEventListener('click', () => {

    showUserMenu.style.display = 'none';
    if (showUserMenu.style.display === 'none'){
        userButton.style.display = 'block'
    }
});





}

);
