
function processar(){
        
        // Tempo de espera (em milissegundos)
        const TEMPO_ESPERA = 7000; // 7 segundos

        // Página de destino após o carregamento
        const URL_DESTINO = "consulta.html";

        // Redireciona após o tempo definido
        setTimeout(() => {
            window.location.href = URL_DESTINO;
        }, TEMPO_ESPERA);
            
}