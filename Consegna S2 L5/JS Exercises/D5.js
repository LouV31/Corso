/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for(let i = 0; i < pets.length; i++){
  let pet = pets[i];
  console.log(pet); 
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift());
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++){
  let car = cars[i];
  car.licensePlate = "ff342gg" + [i];
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({brand: 'lamborghini', model: 'urus', color: 'yellow', trims: ['trim1', 'trim2', 'trim3']});
for (let i = 0; i < cars.length; i++){
  let car = cars[i];
  car.trims.pop();
}
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++){
  let car = cars[i];
  justTrims.push(car.trims[0]);
}
console.log(justTrims);
  

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i = 0; i < cars.length; i++){
  let car = cars[i];
  if(car.color.substring(0, 1) === 'b'){
    console.log('fizz');
  } else {
    console.log('Buzz');
  }
}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while(numericArray[i] !== 32){
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const numbersArray = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];

for(let i = 0; i < charactersArray.length; i++){
  let letter = charactersArray[i];
  switch(true){
    case letter === 'a':
      letter = 1;
      break;
    case letter === 'b':
      letter = 2;
      break;
    case letter === 'c':
      letter = 3;
      break;
    case letter === 'd':
      letter = 4;
      break;
    case letter === 'e':
      letter = 5;
      break;
    case letter === 'f':
      letter = 6;
      break;
    case letter === 'g':
      letter = 7;
      break;
    case letter === 'h':
      letter = 8;
      break;
    case letter === 'i':
      letter = 9;
      break;
    case letter === 'l':
      letter = 10;
      break;
    case letter === 'm':
      letter = 11;
      break;
    case letter === 'n':
      letter = 12;
      break;
    case letter === 'o':
      letter = 13;
      break;
    case letter === 'p':
      letter = 14;
      break;
    case letter === 'q':
      letter = 15;
      break;
    case letter === 'r':
      letter = 16;
      break;
    case letter === 's':
      letter = 17;
      break;
    case letter === 't':
      letter = 18;
      break;
    case letter === 'u':
      letter = 19;
      break;
    case letter === 'v':
      letter = 20;
      break;
    case letter === 'z':
      letter = 21;
      break;
    default: console.log('non è una lettera');
      break;
  }
  numbersArray.push(letter);
}
console.log(numbersArray)

// ALTRO METODO PER SVOLGERE L'ESERCIZIO: Ciclo l'array characters per prendere ogni singolo elemento di esso.
// Dopo di che ciclo l'array alphabet per avere anche di esso ogni singolo elemento.
// Con un costrutto if confronto il singolo elemento di characters con il singolo elemento di alphabet
// Vado a fare un push della posizione dell'elemento di alphabet + 1 perché gli array partono da 0.
/*
for(let i = 0; i < charactersArray.length; i++){
  for(let j = 0; j < alphabet.length; j++){
    let letter = alphabet[j]
    if(charactersArray[i] === letter){
      numbersArray.push(j + 1);
    }
  }
}
console.log(numbersArray); 
*/


