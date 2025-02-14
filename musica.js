window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("musica/OperacaoCupido.mp3");
    audio.loop = true; // Repetir a música automaticamente

    // Tentar tocar a música automaticamente
    audio.play().catch(() => {
        console.warn("Autoplay bloqueado! Aguardando interação do usuário...");
        
        // Tocar a música quando o usuário clicar na página
        document.addEventListener("click", () => {
            audio.play();
        }, { once: true }); // Garante que o evento só ocorra uma vez
    });
});
