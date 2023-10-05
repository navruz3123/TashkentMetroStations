let dustlik = document.querySelector("#dustlik");
let mashinasozlar = document.querySelector("#mashinasozlar");
let toshkent = document.querySelector("#toshkent");
let oybek = document.querySelector("#oybek");
let kosmonavtlar = document.querySelector("#kosmonavtlar");
let uzbekiston = document.querySelector("#uzbekiston");
let alisher = document.querySelector("#alisher");
let gofur = document.querySelector("#gofur");
let chorsu = document.querySelector("#chorsu");
let tinchlik = document.querySelector("#tinchlik");
let beruniy = document.querySelector("#beruniy");
let box = document.querySelector("#box");

let elm = document.querySelector(".boxul");

// const elm = document.querySelector('ul');
elm.addEventListener("click", (e) => {
  const elActive = elm.querySelector(".active");
  console.log(elActive);
  if (elActive) {
    elActive.removeAttribute("class");
  }
  e.target.setAttribute("class", "active");
});
