let litag = document.querySelectorAll("li a");
let beruniy = document.querySelector("#beruniy");
let tinchlik = document.querySelector("#tinchlik");
let chorsu = document.querySelector("#chorsu");
let gofurgulom = document.querySelector("#gofurgulom");
let alishernavoiy = document.querySelector("#alishernavoiy");
let uzbekiston = document.querySelector("#uzbekiston");
let kosmonavtlar = document.querySelector("#kosmonavtlar");
let oybek = document.querySelector("#oybek");
let toshkent = document.querySelector("#toshkent");
let mashinasozlar = document.querySelector("#mashinasozlar");
let dustlik = document.querySelector("#dustlik");

litag.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    item.classList.add("active");
    if (item.textContent === "Beruniy") {
      tinchlik.style.display = "none";
      uzbekiston.style.display = "none";
      mashinasozlar.style.display = "none";
      dustlik.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      kosmonavtlar.style.display = "none";
      alishernavoiy.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      beruniy.style.display = "block";
    } else if (item.textContent === "Tinchlik") {
      beruniy.style.display = "none";
      alishernavoiy.style.display = "none";
      dustlik.style.display = "none";
      toshkent.style.display = "none";
      mashinasozlar.style.display = "none";
      kosmonavtlar.style.display = "none";
      oybek.style.display = "none";
      uzbekiston.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      tinchlik.style.display = "block";
    } else if (item.textContent === "Chorsu") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      dustlik.style.display = "none";
      kosmonavtlar.style.display = "none";
      mashinasozlar.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      uzbekiston.style.display = "none";
      alishernavoiy.style.display = "none";
      gofurgulom.style.display = "none";
      chorsu.style.display = "block";
    } else if (item.textContent === "G'ofur G'ulom") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      kosmonavtlar.style.display = "none";
      dustlik.style.display = "none";
      mashinasozlar.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      uzbekiston.style.display = "none";
      alishernavoiy.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "block";
    } else if (item.textContent === "Alisher Navoiy") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      kosmonavtlar.style.display = "none";
      mashinasozlar.style.display = "none";
      dustlik.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      uzbekiston.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "block";
    } else if (item.textContent === "O'zbekiston") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      kosmonavtlar.style.display = "none";
      dustlik.style.display = "none";
      mashinasozlar.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      uzbekiston.style.display = "block";
    } else if (item.textContent === "Kosmonavtlar") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      mashinasozlar.style.display = "none";
      dustlik.style.display = "none";
      chorsu.style.display = "none";
      toshkent.style.display = "none";
      oybek.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      uzbekiston.style.display = "none";
      kosmonavtlar.style.display = "block";
    } else if (item.textContent === "Oybek") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      toshkent.style.display = "none";
      mashinasozlar.style.display = "none";
      dustlik.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      uzbekiston.style.display = "none";
      kosmonavtlar.style.display = "none";
      oybek.style.display = "block";
    } else if (item.textContent === "Toshkent") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      chorsu.style.display = "none";
      dustlik.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      mashinasozlar.style.display = "none";
      uzbekiston.style.display = "none";
      kosmonavtlar.style.display = "none";
      oybek.style.display = "none";
      toshkent.style.display = "block";
    } else if (item.textContent === "Mashinasozlar") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      dustlik.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      uzbekiston.style.display = "none";
      kosmonavtlar.style.display = "none";
      oybek.style.display = "none";
      toshkent.style.display = "none";
      mashinasozlar.style.display = "block";
    } else if (item.textContent === "Do'stlik") {
      beruniy.style.display = "none";
      tinchlik.style.display = "none";
      chorsu.style.display = "none";
      gofurgulom.style.display = "none";
      alishernavoiy.style.display = "none";
      uzbekiston.style.display = "none";
      kosmonavtlar.style.display = "none";
      oybek.style.display = "none";
      toshkent.style.display = "none";
      mashinasozlar.style.display = "none";
      dustlik.style.display = "block";
    }
  });
});

const imageList = document.querySelector(".image-list");
const buttons = document.querySelectorAll(".slide-button");
const sliderScrollbar = document.querySelector(".slider-scrollbar");
const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX;
  const thumPosition = scrollbarThumb.offsetLeft;

  const hadleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumPosition + deltaX;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;
    const boundedPosition = Math.max(
      0,
      Math.min(maxThumbPosition, newThumbPosition)
    );
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
    scrollbarThumb.style.left = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
  };

  const hadleMouseUp = () => {
    document.removeEventListener("mousemove", hadleMouseMove);
    document.removeEventListener("mouseup", hadleMouseUp);
  };

  document.addEventListener("mousemove", hadleMouseMove);
  document.addEventListener("mouseup", hadleMouseUp);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

const handleSlideButtons = () => {
  buttons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
  buttons[1].style.display =
    imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
};

const updateScrollThumbPosition = () => {
  const scrollPosition = imageList.scrollLeft;
  const thumPosition =
    (scrollPosition / maxScrollLeft) *
    (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumPosition}px`;
};

imageList.addEventListener("scroll", () => {
  handleSlideButtons();
  updateScrollThumbPosition();
});

window.addEventListener("load", initSlider);
