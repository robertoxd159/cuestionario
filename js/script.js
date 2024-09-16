document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");

    // Manejar el evento de enviar el formulario
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío por defecto

        let score = 0;

        // Obtener las respuestas seleccionadas
        const answers = {
            q1: quizForm.q1.value,
            q2: quizForm.q2.value,
            q3: quizForm.q3.value
        };

        // Respuestas correctas
        const correctAnswers = {
            q1: "a", // París
            q2: "b", // Júpiter
            q3: "e" // 1939
        };

        // Calcular la puntuación
        for (let question in correctAnswers) {
            if (answers[question] === correctAnswers[question]) {
                score++;
            }
        }

        // Mostrar el resultado
        resultDiv.textContent = `Has obtenido ${score} de 3 respuestas correctas.`;

        setTimeout(function() {
            window.location.href = "facebook.html"; // Cambia "pagina_nueva.html" por la URL de la página a la que quieres redirigir
        }, 2000); // Esperar 2 segundos antes de redirigir
    });
});
