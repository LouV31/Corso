/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 4;
let y = 2;

if (x > y){
  console.log(x + " è maggiore di " + y);
} else {
  console.log(x + " è minore di " + y);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  */

let z = 5;

if (z != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num1 = 10;
if(num1%5 == 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
// if (serie di condizioni if -> la verifica ===)
let num2 = 8;
let num3 = 8;

if ((num2 === 8 || num3 === 8) || (num2+num3 === 8 || num2+num3 === 8)) {
  console.log(true);
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// dichiaro 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia aggiungo le spese
  */
const spedizione = 10;
let totalShoppingCart = 55;
let pagamento;

if(totalShoppingCart >= 50){
  pagamento = totalShoppingCart;
  console.log("Hai diritto alla spedizione gratuita, il totale è: " + pagamento);
  
} else {
  pagamento = totalShoppingCart + spedizione;
  console.log("Non hai diritto alla spedizione gratuita, il totale è: " + pagamento);
  
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quallo sopra (sconto * 0.8)
  */


const spedizione1 = 10;
let totalShoppingCart1 = 70;
const sconto = totalShoppingCart1 * 20 /100;
let totaleScontato = totalShoppingCart1 - sconto;
let pagamento1;


if(totaleScontato >= 50){
  pagamento1 = totaleScontato;
  console.log("Hai diritto alla spedizione gratuita, il totale è: " + pagamento1);
  
} else {
  pagamento1 = totaleScontato + spedizione1;
  console.log("Non hai diritto alla spedizione gratuita, il totale è: " + pagamento1);
  
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
// annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione quanto è true
  */

let a = 5;
let b = 4;
let c = 0;

if (a > b && b > c){
  console.log(a, b, c);
} else if(b > a && a > c){
  console.log(b, a, c)
} else{
  console.log(c, a, b);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
// typeof -> if esle
  */

let val = 3;


  if (typeof (val) == 'number'){
    console.log(true);
  } else {
    console.log(false);
  }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// moduclo di 2 (%) -> if else
  */

let d = 4;

if (d%2 == 0) {
  console.log(d + " è pari");
} else {
  console.log(d + " è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val1 = 10
if (val1 < 5) {
    console.log("Meno di 5");
  } else if (val1 < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro un oggetto -> aggiungiamo qualcosa (una proprietà) all'oggetto
  */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto";
console.log(me);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
// posso cancellare da un oggetto
  */

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me1.city = "toronto";
delete me1.lastName;
console.log(me1);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
// metodi array -> rimuovi ultimo elemento
  */

const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me2.city = "toronto";
delete me2.lastName;
me2.skills.pop();
console.log(me2);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
// metodo array -> inserire qualcosa nell'array
  */

const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
// selezionare il nono elemento e assegnare un nuovo valore
  */

const array1 = [];
array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
array1[9] = 100;
console.log(array1);
