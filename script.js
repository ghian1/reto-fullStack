// Seleccionamos el formulario
const subscribeForm = document.getElementById('subscribeForm');

// Agregamos un evento para manejar el envío del formulario
subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del formulario

    // Validamos si el campo tiene un valor
    const emailInput = document.getElementById('emailInput');
    if (emailInput.value) {
        // Redirigimos a la página de confirmación
        window.location.href = 'confirmation.html';
    } else {
        alert('Por favor ingresa un email valido.');
    }
});

function goBack() {
    window.location.href = 'index.html';
}