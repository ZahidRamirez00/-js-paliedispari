//==========================================================================
// Palidroma

//Chiedo all’utente di inserire una parola
let parolaInserita = prompt("Inserisci una parola: ");
//Richiamo la funzione
//Verifioc che la variabile -controllo- sia vera per scrivere il risultato
if(palindrome(parolaInserita)){
    console.log("La parola che hai inserito è palindroma");
}else{
    console.log("La parola che hai inserito non è palintroma");
}

//Creo una funzione per capire se la parola inserita è palindroma 
function palindrome(parola) {
    let re = /[^A-Za-z0-9]/g;
    parola = parola.toLowerCase().replace(re, '');
    let len = parola.length;
    for (let i = 0; i < len/2; i++) {
      if (parola[i] !== parola[len - 1 - i]) {
          return false;
      }
    }
    return true;
}


//=================================================================================
//  Pari e Dispari
//Faccio un ciclo per controllare se
let sceltaUtente;
let numeroUtente;
let test1 = false;
let test2 = false;
do{
    sceltaUtente = prompt("Scegli se PARI o DISPARI");
    numeroUtente = prompt("Scegli un numero da 1 a 5");
    if(sceltaUtente == "dispari" || sceltaUtente == "Dispari" || sceltaUtente == "DISPARI" || sceltaUtente == "pari" || sceltaUtente == "pari" || sceltaUtente == "PARI"){
        test1 = true;
    }
    if(numeroUtente<=5 && numeroUtente>0){
        test2 = true;
    }   
}while(!test1 && !test2);

console.log(sceltaUtente);
console.log(numeroUtente);
console.log("è tutto ok");

function pariDispari(scelta,numero){
    let numeroCasuale = Math.round(Math.random()*4)+1;
    let somma = numero + numeroCasuale;
    
    if(somma%2 == 0){

    }
}