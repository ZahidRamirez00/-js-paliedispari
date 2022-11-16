//Chiedo all’utente di inserire una parola
let parolaInserita = prompt("Inserisci una parola: ");
//Richiamo la funzione
//controlloParola(parolaInserita); Vecchio nome della funzione
console.log(palindroma(parolaInserita));

//Creo una funzione per capire se la parola inserita è palindroma 
function palindroma(parola) {
    let re = /[^A-Za-z0-9]/g;
    parola = parola.toLowerCase().replace(re, '');
    let len = parola.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== parola[len - 1 - i]) {
          return false;
      }
    }
    return true;
}
