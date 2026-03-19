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

  // Controleer of dat element bestaat én de class "error" heeft
  // Zo niet, stop dan met deze input en ga naar de volgende
  if (!errorSpan?.classList.contains("error")) return;

  // Voeg een event listener toe die afgaat bij elke verandering (typen)
  input.addEventListener("input", () => {

    // checkValidity() controleert of de input voldoet aan HTML-validatie
    errorSpan.style.display = input.checkValidity() ? "none" : "inline";
  });
});

// Prompt chatgpt: Ik heb inputvelden met een <span class="error">, hoe toon/verberg ik die op basis van validatie?


