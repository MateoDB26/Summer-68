const buscador = document.querySelector("#buscador");

buscador.addEventListener("keyup", (e) => {
const texto = e.target.value.toLowerCase();
const cards = document.querySelectorAll(".carta");

if (texto.length > 0) {
cards.forEach((card) => {
const titulo = card.textContent.toLowerCase();
if (titulo.indexOf(texto) !== -1) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});
} else {
cards.forEach((card) => {
card.style.display = "block";
});
}
});