document.addEventListener('DOMContentLoaded', function () {
    // Supongamos que la información vendrá de un objeto
    const medicamentoInfo = {
        nombreComercial: 'Cozaar',
        dosis: '50mg',
        frecuencia: 'Dosis diaria hasta próxima cita',
        efectosAdversos: 'somnolencia, cefalea',
        fechaInicio: '15/01/2023',
        fechaTerminacion: '15/01/2024',
        medico: 'Alberto Posada'
    };

    // Llenar la información en la tarjeta 1
    document.getElementById('nombre-comercial-1').textContent = medicamentoInfo.nombreComercial;
    document.getElementById('dosis-1').textContent = medicamentoInfo.dosis;
    document.getElementById('frecuencia-1').textContent = medicamentoInfo.frecuencia;
    document.getElementById('efectos-adversos-1').textContent = medicamentoInfo.efectosAdversos;
    document.getElementById('fecha-inicio-1').textContent = medicamentoInfo.fechaInicio;
    document.getElementById('fecha-terminacion-1').textContent = medicamentoInfo.fechaTerminacion;
    document.getElementById('medico-1').textContent = medicamentoInfo.medico;

    // Agregar event listener para el botón de estado 1
    document.getElementById('estadoButton-1').addEventListener('click', function() {
        console.log('Botón de estado 1 clickeado');
        toggleEstado(1);
    });

    // Agregar event listener para el botón de estado 2
    document.getElementById('estadoButton-2').addEventListener('click', function() {
        console.log('Botón de estado 2 clickeado');
        toggleEstado(2);
    });

    // Agregar event listener para el botón de estado 3
    document.getElementById('estadoButton-3').addEventListener('click', function() {
        console.log('Botón de estado 3 clickeado');
        toggleEstado(3);
    });

    // Agregar event listener para el botón de estado 4
    document.getElementById('estadoButton-4').addEventListener('click', function() {
        console.log('Botón de estado 4 clickeado');
        toggleEstado(4);
    });
});

function toggleEstado(cardNumber) {
    console.log('toggleEstado llamado para la tarjeta', cardNumber);
    const options = document.querySelector('.estado-options-' + cardNumber);
    options.classList.toggle('show');
}


function setEstado(estado, cardNumber) {
    const card = document.querySelector('.card-' + cardNumber);
    card.classList.remove('pendiente', 'en-proceso', 'finalizado');
    card.classList.add(estado);
    switch (estado) {
        case 'pendiente':
            card.style.borderColor = 'red';
            break;
        case 'en-proceso':
            card.style.borderColor = 'blue';
            break;
        case 'finalizado':
            card.style.borderColor = 'green';
            break;
        default:
            card.style.borderColor = '';
    }
    const options = document.querySelector('.estado-options-' + cardNumber);
    options.classList.remove('show');
}
    

// Agregar event listener para los botones de estado
// document.getElementById('pendiente').addEventListener('click', function() {
//     setEstado('pendiente', 1); // Cambia el número de tarjeta según corresponda
// });

// document.getElementById('en-proceso').addEventListener('click', function() {
//     setEstado('en-proceso', 1); // Cambia el número de tarjeta según corresponda
// });

// document.getElementById('finalizado').addEventListener('click', function() {
//     setEstado('finalizado', 1); // Cambia el número de tarjeta según corresponda
// });