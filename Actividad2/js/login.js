document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Evento para mostrar u ocultar la contraseña
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('bi-eye');
        togglePassword.classList.toggle('bi-eye-slash');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener datos del formulario
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        // Simulación del rol - Establece el rol aquí
        const role = username === "adminUser" ? "admin" : "user"; // Simula que el usuario "adminUser" es administrador

        // Guardar datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify({ username, email, role }));

        // Redirigir a la página principal
        window.location.href = 'index.html';
    });
});
