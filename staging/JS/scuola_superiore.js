// Metodo per mostrare/nascondere il contenuto di una sezione
function comportamentoSezione(nSezione){
    // Verifica che il contenuto da visualizzare non sia già aperto
    var sezione = document.getElementsByClassName("contenitore-primario");
    var _contenuto = sezione[nSezione].getElementsByClassName("contenuto");

    // Codice di apertura sezione
    if(window.getComputedStyle(_contenuto[0]).getPropertyValue("display") == "none"){
        // Nascondi i contenuti di tutte le sezioni
        var _contenuti = document.getElementsByClassName("contenuto");

        for(var i = 0; i < _contenuti.length; i++){
            _contenuti[i].style.display = "none";
        }

        // Visualizza il contenuto della sezione cliccata
        _contenuto[0].style.display = "block";

        // Conversione tasti di chiusura in tasti di apertura
        var _pulsanti = document.getElementsByClassName("espandi");
        for(var i = 0; i < _pulsanti.length; i++){
            animaPulsante(_pulsanti[i], false);
        }

        // Conversione tasto di apertura in tasto di chiusura
        _pulsante = sezione[nSezione].getElementsByClassName("header")[0].getElementsByClassName("espandi")[0];
        animaPulsante(_pulsante, true);
    }
    // Codice di chiusura sezione
    else if(window.getComputedStyle(_contenuto[0]).getPropertyValue("display") == "block"){
        _contenuto[0].style.display = "none";

        // Conversione tasto di chiusura in tasto di apertura
        _pulsante = sezione[nSezione].getElementsByClassName("header")[0].getElementsByClassName("espandi")[0];
        animaPulsante(_pulsante, false);
    }
}

// Metodo per effettuare l'animazione dei pulsanti di apertura/chiusura di una sezione
function animaPulsante(pulsante, apri){
    if(apri){
        pulsante.style.transition = "transform 0.7s ease";
        pulsante.style.transform = "rotate(180deg)";
    }
    else{
        pulsante.style.transition = "transform 0.7s ease";
        pulsante.style.transform = "rotate(0deg)";
    }
}

// Applica i metodi di apertura/chiusura delle sezioni a tutte le sezioni primarie
var _contenitoriPrimari = document.getElementsByClassName("contenitore-primario");

for(var i = 0; i < _contenitoriPrimari.length; i++){
    _contenitoriPrimari[i].addEventListener("click", createCallback(i));

    /*
    // Applica i metodi di apertura/chiusura delle sezioni a tutte le sezioni secondarie
    var _contenitoriSecondari = _contenitoriPrimari[i].getElementsByClassName("sezione-secondaria");
    
    for(var j = 0; j < _contenitoriSecondari.length; j++)
        _contenitoriSecondari[j].addEventListener("click", comportamentoSezione(_contenitoriSecondari[j]));
    */
}

function createCallback(index) {
    console.log(index);
    return function() {
        comportamentoSezione(index);
    };
}