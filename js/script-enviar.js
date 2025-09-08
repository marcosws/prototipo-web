
function processar(){
        
        // Tempo de espera (em milissegundos)
        const TEMPO_ESPERA = 11000; // 11 segundos

        // Página de destino após o carregamento
        const URL_DESTINO = "consulta.html";

        // Redireciona após o tempo definido
        sessionStorage.setItem('formulario', 'enviado');
        setTimeout(() => {
            window.location.href = URL_DESTINO;
        }, TEMPO_ESPERA);
            
}