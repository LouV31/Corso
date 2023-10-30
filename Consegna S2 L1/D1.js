/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 In JavaScript i DataTypes si dividono in Primitivi e Complessi.

PRIMITIVI:
 1. Numeri    -> Si scrivono senza apici e sono: Numeri Interi Positivi e Negativi; Decimali Positivi e Negativi; Nan (valore numerico non definito)
 2. Stringhe  -> Si scrivono con gli apici ('') o con i doppi apici (""). Se apro con l'apice singolo chiudo con l'apice singolo; se apro con il doppio
                 apice chiudo con il doppio apice. Se voglio scrivere una stringa in cui ho bisogno di andare a capo uso
                 \n -> es: "Ieri c'era il sole. \nOggi piove" 
                 \ può essere utilizzato per considerare il l'apice come apostrofo e non come delimitatore ad esempio:
                 'l\'altro ieri' -> questa stringa mi verrà stampata come: l'altro ieri.
                 'l'altro ieri'  -> mi considera l'apostrofo come una chiusura del delimitatore.
 3. Booleani  -> I Booleani sono due: True e False. Sono gli unici due possibili ad es 5 > 6 = false o 6 > 5 = ture.
 4. null      -> null prevede un solo valore possibile ossia: null.
              -> null != 0
              -> null != stringa vuota.
 5. undefined -> Prevede un solo valore: undefined. Rappresenta un valore che non esiste. Non ha assegnato nemmeno (null)
              -> es: miaVariabile; -> questo sarà undefined.

COMPLESSI:
1. Oggetti -> es: array, funzioni -> al loro intenro possiamo inserire proprietà attributo valore e/o funzioni.

 */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = "Luigi";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = "Valentino";
const surname = "Luigi";
// surname = "pippo"; // in questo caso mi darà errore in quanto la variabile surname è stata dichiarata come costante il cui valore è "Luigi". Non può essere cambiata in "pippo".



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = x - 4;
console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";
(name1==name2) ? console.log(true) : console.log(false);
(name1.toLowerCase()==name2.toLowerCase()) ? console.log(true) : console.log(false);

