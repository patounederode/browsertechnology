// const voorletters = document.getElementById("voorletters");

// voorletters.addEventListener("input", () => {
//   if (voorletters.value === "") {
//     voorletters.setCustomValidity("Vul je voorletter(s) in");
//   } else {
//     voorletters.setCustomValidity("");
//   }
// });
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


// DISABELD MAKEN NOTARIS LIJSTJE
// selecteer de radio buttons
const testamentJa = document.getElementById('weltestament');
const testamentNee = document.getElementById('geentestament');

// selecteer alle velden in het notaris fieldset
const notarisVelden = Array.from(document.querySelectorAll('#protocolnummer input'));
const notarisFieldset = document.getElementById('protocolnummer'); // voor labels grijs maken

// functie om alles in het notaris veldset uit/inschakelen
function toggleNotarisVelden(disable) {
    notarisVelden.forEach(v => v.disabled = disable);
    if(disable) {
        notarisFieldset.classList.add('disabled-group');
    } else {
        notarisFieldset.classList.remove('disabled-group');
    }
}

// event listeners voor de radio buttons
testamentJa.addEventListener('change', () => toggleNotarisVelden(false));
testamentNee.addEventListener('change', () => toggleNotarisVelden(true));


// DISABLED MAKEN KIES 1 van de 3
const bsn = document.getElementById('bsn-rsin-input');
const becon = document.getElementById('beconnummer-input');
const protocol = document.getElementById('protocolnummer-notaris-input');

// stop ze in een lijstje
const velden = [bsn, becon, protocol];

// functie om andere velden uit te schakelen
function checkInvullen(gekozen) {
    velden.forEach(v => {
        const fieldset = v.closest('fieldset'); // pak het parent fieldset voor label styling
        if (v === gekozen) {
            // het veld waar je in typt blijft actief
            v.disabled = false;
            fieldset.classList.remove('disabled-group');
        } else {
            if (gekozen.value.trim() !== '') {
                // andere velden uitschakelen als dit veld iets heeft
                v.disabled = true;
                fieldset.classList.add('disabled-group');
            } else {
                // andere velden weer inschakelen als dit veld leeg is
                v.disabled = false;
                fieldset.classList.remove('disabled-group');
            }
        }
    });
}

// luister naar elk veld wanneer er iets wordt ingevuld
velden.forEach(v => {
    v.addEventListener('input', () => checkInvullen(v));
});