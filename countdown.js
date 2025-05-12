document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const progressBar = document.querySelector(".progress");
    const startDate = new Date("2025-05-06T12:00:00"); // Início da contagem
    const targetDate = new Date("2025-05-12T12:00:00"); // Fim da contagem
    const totalDuration = targetDate - startDate; // Duração total em milissegundos

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownElement.textContent = "Chegou a hora!";
            progressBar.style.width = "100%";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Calcula a porcentagem de tempo decorrido
        const elapsed = now - startDate;
        const progressPercentage = Math.min((elapsed / totalDuration) * 100, 100);
        progressBar.style.width = `${progressPercentage}%`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
