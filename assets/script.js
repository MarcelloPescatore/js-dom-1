// link test
console.log('test');


// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// button element
const buttonEl = document.getElementById('button_light')
console.log(buttonEl);

// light elements
const imgOnEl = document.getElementById('light_on')
const imgOffEl = document.getElementById('light_off')
console.log(imgOnEl , imgOffEl);

// Toggle functionality on button click 
buttonEl.addEventListener('click', () => {
    // check the status through the text
    if(buttonEl.innerHTML.includes('Accendi')){
        // if the condition is true shows the light on and change the text in the button
        imgOnEl.style.display = 'inline';
        imgOffEl.style.display = 'none';
        buttonEl.innerHTML = '<h2> Spegni </h2>'
    } else {
        // else is false shows the light off and change the text in the button
        imgOffEl.style.display = 'inline';
        imgOnEl.style.display = 'none';
        buttonEl.innerHTML = '<h2> Accendi </h2>'
    }
});