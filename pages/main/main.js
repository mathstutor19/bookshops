const navigationItems = document.querySelectorAll(".navigation__item_link");
const navigation = Array.from(navigationItems);
const prices = document.querySelectorAll(".price");
const pricesArr = [...prices];

function addAndRemoveClass(classList, className) {
  classList.map((item) => {
    item.addEventListener("click", () => {
      classList.map((el) =>
        item.textContent === el.textContent
          ? el.classList.add(className)
          : el.classList.remove(className)
      );
    });
  });
}

addAndRemoveClass(navigation, "active-link");
addAndRemoveClass(pricesArr, "active-price");
//  responsive navbar start
const closebutton = document.querySelector(".table__close__button");
const tableNavbar = document.querySelector(".table__navbar");
const openNavbar = document.querySelector(".burger__wrapper");
openNavbar.addEventListener("click", function () {
  tableNavbar.style.display = "block";
});
closebutton.addEventListener("click", function () {
  tableNavbar.style.display = "none";
});
tableNavbar.addEventListener("click", function () {
  tableNavbar.style.display = "none";
});
// testimonials start
testimonials = [
  {
    title: "Michael John",
    text: "Local Austria &nbsp; &nbsp; Today",
    img: "../../assets/icons/user_icon.png",
    about:
      "The best online zoo I’ve met. My son delighted very much ljve to watch gouillas. Online zoo is one jf the ways to instill a    love for animals.The best online zoo I’ve met. My son delighted   very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />     The best online zoo I’ve met. My son delighted very much ljves    to watch gouillas. Online zoo is one jf the ways to instill a     love for animals.The best online zoo I’ve met. My son delighted     very much ljves to watch gouillas. Online zoo is one jf the ways     to instill a love for",
  },
  {
    title: "Oskar Samborsky",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/userssecond.png",
    about:
      "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love  for animals.The best online zoo I’ve met. My son delighted very  much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves  to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
  },
  {
    title: "Fredericka Michelin",
    text: " Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersthird.png",
    about:
      " The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br /> The best online zoo I’ve met. My son delighted very much ljves  to",
  },
  {
    title: "Mila Riksha",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersfour.png",
    about:
      " My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son  delighted very much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
  },
  {
    title: "Michael John",
    text: "Local Austria &nbsp; &nbsp; Today",
    img: "../../assets/icons/user_icon.png",
    about:
      "The best online zoo I’ve met. My son delighted very much ljve to watch gouillas. Online zoo is one jf the ways to instill a    love for animals.The best online zoo I’ve met. My son delighted   very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />     The best online zoo I’ve met. My son delighted very much ljves    to watch gouillas. Online zoo is one jf the ways to instill a     love for animals.The best online zoo I’ve met. My son delighted     very much ljves to watch gouillas. Online zoo is one jf the ways     to instill a love for",
  },
  {
    title: "Oskar Samborsky",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/userssecond.png",
    about:
      "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love  for animals.The best online zoo I’ve met. My son delighted very  much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves  to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
  },
  {
    title: "Fredericka Michelin",
    text: " Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersthird.png",
    about:
      " The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br /> The best online zoo I’ve met. My son delighted very much ljves  to",
  },
  {
    title: "Mila Riksha",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersfour.png",
    about:
      " My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son  delighted very much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
  },
  {
    title: "Oskar Samborsky",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/userssecond.png",
    about:
      "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love  for animals.The best online zoo I’ve met. My son delighted very  much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves  to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
  },
  {
    title: "Fredericka Michelin",
    text: " Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersthird.png",
    about:
      " The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br /> The best online zoo I’ve met. My son delighted very much ljves  to",
  },
  {
    title: "Mila Riksha",
    text: "Local Austria &nbsp; &nbsp; Yesterday",
    img: "../../assets/icons/usersfour.png",
    about:
      " My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son  delighted very much ljves to watch gouillas. <br />  The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
  },
];

// let rangeValue = function () {
//   let newValue = elem.value;
//   let target = document.querySelector(".value");
//   target.innerHTML = newValue;
// };

// elem.addEventListener("input", rangeValue);

// const testimonialsCard = document.querySelector(".testimonials__card");
// let i = 6;
// let output = [];
// elementValue.addEventListener("change", function () {
//   i = Number(elementValue.value);
//   if (i == 0) {
//     output = [];
//     output = [
//       testimonials[1],
//       testimonials[2],
//       testimonials[3],
//       testimonials[4],
//     ];
//     console.log(output);
//     cardArticle(output);
//   }
//   if (i == 1) {
//     output = testimonials.slice(1, 5);
//     cardArticle(output);
//   }
//   if (i == 2) {
//     output = testimonials.slice(2, 6);
//     cardArticle(output);
//   }
// });

// function cardArticle(output) {
//   for (let i = 0; i < 4; i++) {
//     const productCard = document.createElement("article");
//     productCard.className = "testimonials__article";
//     testimonialsCard.appendChild(productCard);
//     const imageWrapper = document.createElement("div");
//     imageWrapper.className = "testimonials__img__wrapper";
//     productCard.appendChild(imageWrapper);
//     const productImg = document.createElement("img");
//     productImg.src = `${output.img}`;
//     productImg.alt = "image";
//     imageWrapper.appendChild(productImg);
//     const productContent = document.createElement("h4");
//     imageWrapper.appendChild(productContent);
//     const productTitle = document.createElement("h4");
//     productTitle.className = "testimonials__img__title";
//     productTitle.innerHTML = `${output.title}`;
//     productContent.appendChild(productTitle);
//     const productText = document.createElement("p");
//     productText.className = "testimonials__img__text";
//     productText.innerHTML = `${output.text}`;
//     productContent.appendChild(productText);
//     const productAbout = document.createElement("p");
//     productAbout.className = "testimonials__text";
//     productAbout.innerHTML = `${output.about}`;
//     productCard.appendChild(productAbout);
//   }
// }
let lastValue = [0];
let elementValue = document.querySelector('input[type="range"]');

elementValue.addEventListener("change", function () {
  lastValue.push(+elementValue.value);
  let distance = elementValue.value - lastValue[lastValue.length - 2];
  if (Number(elementValue.value > lastValue[lastValue.length - 2])) {
    carousel.scrollBy(distance * (width + gap), 0);
  }
  if (Number(elementValue.value < lastValue[lastValue.length - 2])) {
    carousel.scrollBy(distance * (width + gap), 0);
  }
});
const gap = 20;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});
let width =
  screen.width > 1000
    ? (carousel.offsetWidth - 3 * gap - 8) / 4
    : carousel.offsetWidth / 3;
console.log(width);

window.addEventListener(
  "resize",
  (e) => (width = (carousel.offsetWidth - 2 * gap) / 3)
);

window.addEventListener("resize", function (e) {
  if (screen.width > 1000) {
    width = (carousel.offsetWidth - 3 * gap - 8) / 4;
  }
  if (screen.width <= 1000) {
    elementValue.max = 8;
  }
});
window.onload = function () {
  if (document.body.clientWidth < 641) {
    for (let i = 0; i < testimonialsArticle.length; i++) {
      testimonialsArticle[i].onclick = function () {
        popupFull.style.display = "block";
        popText.innerHTML = `${testimonialsArticle[i].children[1].textContent}`;
        popupImagaUrl.src = `${testimonialsArticle[
          i
        ].children[0].children[0].getAttribute("src")}`;
        popTestimonialsimgTitle.innerHTML = `${testimonialsArticle[i].children[0].children[1].children[0].textContent}`;
        popTestimonialsimgText.innerHTML = `${testimonialsArticle[i].children[0].children[1].children[1].textContent}`;
      };
    }
  }
};
// pop up start
const popTestimonialsimgTitle = document.querySelector(
  ".pop__testimonials__img__title"
);
const popTestimonialsimgText = document.querySelector(
  ".pop__testimonials__img__text"
);
const popupImagaUrl = document.querySelector(".popup__imaga__url");
const popText = document.querySelector(".pop__testimonials__text");
const testimonialsArticle = document.querySelectorAll(".testimonials__article");
const popupFull = document.querySelector(".popup__full");
const popupButoon = document.querySelector(".pop__close__button");
popupButoon.addEventListener("click", function () {
  popupFull.style.display = "none";
});
popupFull.addEventListener("click", function () {
  popupFull.style.display = "none";
});

window.addEventListener("resize", function () {
  if (document.body.clientWidth < 641) {
    for (let i = 0; i < testimonialsArticle.length; i++) {
      testimonialsArticle[i].onclick = function () {
        popupFull.style.display = "block";
        popText.innerHTML = `${testimonialsArticle[i].children[1].textContent}`;
        popupImagaUrl.src = `${testimonialsArticle[
          i
        ].children[0].children[0].getAttribute("src")}`;
        popTestimonialsimgTitle.innerHTML = `${testimonialsArticle[i].children[0].children[1].children[0].textContent}`;
        popTestimonialsimgText.innerHTML = `${testimonialsArticle[i].children[0].children[1].children[1].textContent}`;
      };
    }
  }
});

// if (window.screen.width <= 640) {
//   console.log(" Resolution is 1024x768 or above");
// }
