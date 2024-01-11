window.onload = function() {
            var urlParams = new URLSearchParams(window.location.search);
            var score = urlParams.get('score');
            document.getElementById('percentuale-input').value = score;
            // Inizia l'animazione, poi mostra la percentuale
            coloraTasselli(function() {
                document.getElementById('valore-percentuale').textContent = score;
                document.getElementById('percentuale-testo').style.display = 'block';
            });
        };

function coloraTasselli(callback) {
    let percentualeInput = document.getElementById('percentuale-input').value;
    let percentuale = Math.min(Math.max(parseInt(percentualeInput), 0), 100); // Assicurati che sia tra 0 e 100
    let tasselliFinali = Math.round(10 * percentuale / 100);
    let tasselli = document.querySelectorAll('.tassello');
    let iterazioni = 0;
    
    let intervallo = setInterval(() => {
        if (iterazioni >= 10) { // Numero di oscillazioni prima di fermarsi
            clearInterval(intervallo);
            impostaTasselli(tasselli, tasselliFinali);
            if (typeof callback === 'function') {
                callback(); // Chiama il callback dopo l'animazione
            }
            return;
        }

        let tasselliRandom = Math.floor(Math.random() * 10);
        impostaTasselli(tasselli, tasselliRandom);
        iterazioni++;
    }, 300); // Intervallo tra ogni cambiamento (in millisecondi)
}

function impostaTasselli(tasselli, numero) {
    tasselli.forEach((tassello, index) => {
        tassello.style.backgroundColor = index < numero ? 'red' : 'pink';
    });
}

