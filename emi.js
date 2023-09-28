const frecuenciaNumeros = {};

function contarNumeros() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");

    const numero = numeroInput.value.toLowerCase(); // Convertir a minúsculas para manejar "stop" o "STOP"

    if (numero === "S" || numero === "s") {
        mostrarResultados();
        return;
    }

    // Intentar convertir el valor ingresado a un número entero
    const numeroEntero = parseInt(numero);
    if (!isNaN(numeroEntero)) {
        if (numeroEntero in frecuenciaNumeros) {
            frecuenciaNumeros[numeroEntero] += 1;
        } else {
            frecuenciaNumeros[numeroEntero] = 1;
        }
    }

    numeroInput.value = ""; // Limpiar el campo de entrada
}


function mostrarResultados() {
    const resultadoElement = document.getElementById("resultado");

    // Ordenar el objeto de frecuencia por frecuencia en orden descendente
    const numerosOrdenados = Object.entries(frecuenciaNumeros).sort((a, b) => b[1] - a[1]);

    resultadoElement.innerHTML = "<h2>Los tres números más frecuentes son:</h2>";

    for (let i = 0; i < Math.min(3, numerosOrdenados.length); i++) {
        const numero = numerosOrdenados[i][0];
        const frecuencia = numerosOrdenados[i][1];
        resultadoElement.innerHTML += `<p>Número: ${numero}, Frecuencia: ${frecuencia}</p>`;
    }
}
