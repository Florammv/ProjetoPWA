function agendar() {
    alert("Agendamento realizado com sucesso!");
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

        navigator.serviceWorker.register('./sw.js')
            .then(() => {
                console.log('Service Worker registrado!');
            })
            .catch((erro) => {
                console.log('Erro:', erro);
            });

    });
}