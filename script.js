const voorletters = document.getElementById("#voorletters");

voorletters.addEventListener("input", () => {
  if (voorletters.value === "") {
    voorletters.setCustomValidity("Vul je voorletter(s) in!");
  } else {
    voorletters.setCustomValidity("");
  }
});


