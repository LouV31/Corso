// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate
function handleSubmit(e) {
    e.preventDefault()
    
}

const inputField = document.querySelector("form input")
const numbersArray = [];


function createCell(){
    const table = document.getElementById("table");
    for(let i = 0; i < 90; i++){
        const cell = document.createElement("div")
        cell.classList.add("cell");
        const number = document.createElement("span");
        number.innerText = [i + 1];

        cell.appendChild(number);
        table.appendChild(cell);
        numbersArray.push(i+1)
        
    }
    console.log(numbersArray)
}
createCell()

function draftNumber() {
    const draftNumberButton = document.getElementById("draftNumber");
    const cells = document.querySelectorAll("cell");
    const cellsArray = Array(cells);
    console.log(cellsArray.length)
    draftNumberButton.addEventListener("click", function (){
        const randomNumber = Math.floor(Math.random() * 91);
        for(let i = 0; i < cells.length; i++){
            
         
        }
    })
}
draftNumber()




window.onload = function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
}