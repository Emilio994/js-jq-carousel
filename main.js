$(document).ready(function() {

// Click Next
    $('.next').click(function(){
        var active = $('.active');
        if (active.hasClass('last')) {
            active.removeClass('active');
            $('.first').addClass('active');
        }
        else {
            active.removeClass('active');
            active.next().addClass('active');
        }
    })
    
// Click Prev
    $('.prev').click(function(){
        var active = $('.active');        
        if (active.hasClass('first')) {
            active.removeClass('active');
            $('.last').addClass('active');
        }
        else {
            active.removeClass('active');
            active.prev().addClass('active'); 
        }
    })
});

/* Esposizione struttura del codice :
In entrambi gli eventi andiamo a creare delle variabili esterne allo scope della funzione che, propriamente, svolgeranno il ruolo di archivio del valore di ritorno delle operazioni svolte all'interno al blocco di codice della funzione.
Se non avessimo una variabile(SEMPRE ESTERNA AL BLOCCO DI CODICE) in cui archiviare l'esito in ritorno della funzione, le operazioni influirebbero attivamente sugli elementi richiamati a prescindere dal loro scope, risultando in un paradosso di richiamo: tento di richiamare un elemento che precedentemente ho eliminato, e che quindi non esiste più nel mio attuale flusso, riscontrando un esito indefinito.
*/

