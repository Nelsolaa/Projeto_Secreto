function calcularTempoDesde(dataInicio) {
    const dataInicial = new Date(dataInicio);

    function atualizarContador() {
        const agora = new Date();

        // Calcular a diferença em milissegundos
        const diferencaMs = agora - dataInicial;
        
        // Converter milissegundos para dias
        const totalDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

        // Calcular a diferença exata em anos, meses e dias
        let anos = agora.getFullYear() - dataInicial.getFullYear();
        let meses = agora.getMonth() - dataInicial.getMonth();
        let dias = agora.getDate() - dataInicial.getDate();

        // Ajustar se o dia atual for menor que o dia inicial
        if (dias < 0) {
            const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
            meses -= 1;
        }

        // Ajustar se o mês atual for menor que o mês inicial
        if (meses < 0) {
            anos -= 1;
            meses += 12;
        }

        // Capturar horas, minutos e segundos atuais
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const segundos = agora.getSeconds();

        // Exibir o resultado corretamente
        document.getElementById("contadorTempo").innerHTML = 
        `${totalDias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos <br>
        ao seu lado, baixinha 💖`;
    }

    // Atualizar o contador a cada segundo
    setInterval(atualizarContador, 1000);
    atualizarContador(); // Chamar uma vez para exibir imediatamente
}

// Defina a data de início do relacionamento (AAAA-MM-DD)
const dataDoNamoro = "2024-12-14"; // Altere para a data real
calcularTempoDesde(dataDoNamoro);
