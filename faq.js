document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            // Fecha todas as respostas
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            // Alterna a resposta atual
            item.classList.toggle("active");
        });
    });
});
