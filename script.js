
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage




// Selecteer alle <input> elementen op de pagina
document.querySelectorAll("input").forEach(input => {

  // Pak het eerstvolgende element na de input
  const errorSpan = input.nextElementSibling;

  // Controleer of dat element bestaat en de class "error" heeft
  // Zo niet, stop dan met deze input en ga naar de volgende
  if (!errorSpan?.classList.contains("error")) return;

  // Voeg een event listener toe die afgaat bij elke verandering (typen)
  input.addEventListener("input", () => {

    // checkValidity() controleert of de input voldoet aan HTML-validatie
    errorSpan.style.display = input.checkValidity() ? "none" : "inline";
  });
});

// Prompt chatgpt: Ik heb inputvelden met een <span class="error">, hoe toon/verberg ik die op basis van validatie?


// CHATGPT
// selecteer de radio buttons
const testamentJa = document.getElementById('weltestament');
const testamentNee = document.getElementById('geentestament');

// selecteer alle velden in het notaris fieldset
const notarisVelden = Array.from(document.querySelectorAll('#protocolnummer input'));
const notarisFieldset = document.getElementById('protocolnummer'); // voor labels grijs maken

// functie om notaris-velden aan/uit te zetten
function toggleNotarisVelden() {
    if (testamentJa.checked) {
        // aanzetten
        notarisVelden.forEach(v => v.disabled = false);
        notarisFieldset.classList.remove('disabled-group');
    } else {
        // uitzetten
        notarisVelden.forEach(v => v.disabled = true);
        notarisFieldset.classList.add('disabled-group');
    }
}

// event listeners
testamentJa.addEventListener('change', toggleNotarisVelden);
testamentNee.addEventListener('change', toggleNotarisVelden);






// disabled 1 van de 3
const bsn = document.getElementById('bsn-rsin-input');
const becon = document.getElementById('beconnummer-input');
const protocol = document.getElementById('protocolnummer-notaris-input');

// stop ze in een lijstje
const velden = [bsn, becon, protocol];

// functie om andere velden uit te schakelen
function checkInvullen(gekozen) {
    if (gekozen.value.trim() !== '') {
        // Als er iets in dit veld staat, zet de andere velden uit
        velden.forEach(v => {
            const fieldset = v.closest('fieldset');
            if (v !== gekozen) {
                v.disabled = true;
                fieldset.classList.add('disabled-group');
            } else {
                v.disabled = false;
                fieldset.classList.remove('disabled-group');
            }
        });
    } else {
        // Als dit veld leeg is, zet alles weer aan
        velden.forEach(v => {
            v.disabled = false;
            v.closest('fieldset').classList.remove('disabled-group');
        });
    }
}

velden.forEach(v => {
    v.addEventListener('input', () => checkInvullen(v));
});