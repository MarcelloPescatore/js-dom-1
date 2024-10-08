// link test
console.log('test');


// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const buttonEl = document.getElementById('button_light')
console.log(buttonEl);

const imgOnEl = document.getElementById('light_on')
const imgOffEl = document.getElementById('light_off')
console.log(imgOnEl , imgOffEl);

buttonEl.addEventListener('click', () => {
    imgOffEl.style.display = 'inline';
    imgOnEl.style.display = 'none';
})