let myGames = [];

const BottomListButton = document.querySelector('#button4');
const UpperListButton = document.querySelector('#button1');
const RemoveLast = document.querySelector('#button2');


UpperListButton.addEventListener('click', function (){
    
    const input = document.querySelector('#input1');
    const game = input.value.trim();

    const newArray = document.createElement('h3');
    
    newArray.innerText = myGames;
    
    document.querySelector('main').appendChild(newArray);

    if (game) {myGames.unshift(game)};
    
});


BottomListButton.addEventListener('click', function(){
    
    const input = document.querySelector('#input1');
    const game = input.value.trim();

    const newArray = document.createElement('h3');
    
    newArray.innerText = myGames;
    
    document.querySelector('main').appendChild(newArray);
    
    if (game) {myGames.push(game)};
    
})

RemoveLast.addEventListener('click', function () {

    const input = document.querySelector('#input1');
    const game = input.value.trim();

    const newArray = document.createElement('h3');
    
    newArray.innerText = myGames;
    
    document.querySelector('main').appendChild(newArray);
    
    if (game) {myGames.pop(game)};

    
})

/*
let myGames = ['Age of Empires', 'Hogwarts Legacy', 'The Witcher'];

const topListButton = document.querySelector('#button4');

topListButton.addEventListener('click', function(){
    const input = document.querySelector('#input1');
    
    // Hent verdien fra input-feltet og fjern eventuelle unødvendige mellomrom
    const game = input.value.trim();
    
    if(game) { // Sjekk om input ikke er tom
        myGames.push(game); // Legg til verdien i myGames-arrayen
    }

    // Lag et nytt element for å vise oppdatert liste
    const newArray = document.createElement('h3');
    newArray.innerText = myGames; // Vis listen som en kommaseparert tekst
    
    document.querySelector('main').appendChild(newArray);

    // Tøm input-feltet etter at knappen er trykket
    input.value = '';
});*/

/* Fiks av dobbeltklikk

let myGames = [];

const BottomListButton = document.querySelector('#button4');
const UpperListButton = document.querySelector('#button1');

// Function to render the list
function renderList() {
    const newArray = document.createElement('h3');
    newArray.innerText = myGames.join(', '); // Join array values into a string
    document.querySelector('main').appendChild(newArray);
}

UpperListButton.addEventListener('click', function() {
    const input = document.querySelector('#input1');
    const game = input.value.trim();

    if (game) {
        myGames.unshift(game); // Add to the beginning of the array
    }
    
    renderList(); // Render the updated list
});

BottomListButton.addEventListener('click', function() {
    const input = document.querySelector('#input1');
    const game = input.value.trim();

    if (game) {
        myGames.push(game); // Add to the end of the array
    }

    renderList(); // Render the updated list
});

*/


