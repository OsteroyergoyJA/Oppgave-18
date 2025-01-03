let myGames = [' Age of Empires', ' Hogwarts Legacy', ' The Witcher',]

const topListButton = document.querySelector('#button4');


topListButton.addEventListener('click', function(){
    
    const input = document.querySelector('#input1');
    const game = input.value.trim();
    
    if (game) {myGames.push(game)};
    
    const newArray = document.createElement('h3');
    
    newArray.innerText = myGames;
    
    document.querySelector('main').appendChild(newArray);
})

console.log(myGames);

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



