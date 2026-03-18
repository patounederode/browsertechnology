// const voorletters = document.getElementById("#voorletters");

// voorletters.addEventListener("input", () => {
//   if (voorletters.value === "") {
//     voorletters.setCustomValidity("Vul je voorletter(s) in!");
//   } else {
//     voorletters.setCustomValidity("");
//   }
// });

document.querySelectorAll("input").forEach(input => {
  const errorSpan = input.nextElementSibling;
  if (!errorSpan?.classList.contains("error")) return;

  input.addEventListener("input", () => {
    errorSpan.style.display = input.checkValidity() ? "none" : "inline";
  });
});




