// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
    e.preventDefault()                      // evita il comportamento di default 
    addTask() 
    attachComplete()
    attachDelete()
}

const btn = document.getElementById("btn");
const myInput = document.getElementById("myInput")
const main = document.querySelector("main")

const addTask = function () {
    let row = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = myInput.value;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Rimuovi"
    function clickToRemove(){
        row.remove();
    }

    row.appendChild(paragraph);
    row.appendChild(removeBtn)
    main.appendChild(row);
    removeBtn.addEventListener("click", clickToRemove);
    
    
}

// agganciare gli elementi html come fatto stamattina
// stampare l'html necessario per aggiungere il value del mio campo input inputField.value
// ogni task che aggiungo aggiunge html -> +=


const attachComplete = function () {
    // aggancia gli elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;
}

const attachDelete = function () {
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}