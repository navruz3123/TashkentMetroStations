let btnkarta = document.querySelector("#btn-karta");
let btnimage = document.querySelector("#btn-image");
let card11 = document.querySelector("#card11");
let card22 = document.querySelector("#card22");
let card33 = document.querySelector("#card33");
let card44 = document.querySelector("#card44");
let card55 = document.querySelector("#card55");
btnkarta.addEventListener("click", kartaImag);
btnimage.addEventListener("click", imagImag);
function kartaImag() {
  card11.classList.remove("card1");
  card22.classList.remove("card2");
  card33.classList.remove("card3");
  card44.classList.remove("card4");
  card55.classList.remove("card5");
  card11.classList.add("card11");
  card22.classList.add("card22");
  card33.classList.add("card33");
  card44.classList.add("card44");
  card55.classList.add("card55");
}
function imagImag() {
  card11.classList.remove("card11");
  card22.classList.remove("card22");
  card33.classList.remove("card33");
  card44.classList.remove("card44");
  card55.classList.remove("card55");
  card11.classList.add("card1");
  card22.classList.add("card2");
  card33.classList.add("card3");
  card44.classList.add("card4");
  card55.classList.add("card5");
}
card11.addEventListener("click", (e) => {
  console.log("yes");
});
