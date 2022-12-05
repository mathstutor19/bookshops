const animals = [
  {
    id: 1,
    hoverName: "Giant Pandas",
    hoverplace: "Native to Southwest China",
    imageurl: "../../assets/images/animals_panta.png",
    animalname: "giant Pandas",
    animalsPlace: "Native to Southwest China",
    imageIcon: "../../assets/icons/banana-bamboo_icon.png",
  },
  {
    id: 2,
    hoverName: "Eagles",
    hoverplace: "Native to South America",
    imageurl: "../../assets/images/Eagles.png",
    animalname: "Eagles",
    animalsPlace: "Native to South America",
    imageIcon: "../../assets/icons/meet-fish_icon.png",
  },
  {
    id: 3,
    hoverName: "Gorillas",
    hoverplace: "Native to Congo",
    imageurl: "../../assets/images/Gorillas.png",
    animalname: "Gorillas",
    animalsPlace: "Native to Congo",
    imageIcon: "../../assets/icons/banana-bamboo_icon.png",
  },
  {
    id: 4,
    hoverName: "Two-toed Sloth",
    hoverplace: "Mesoamerica, South America",
    imageurl: "../../assets/images/Two-toedSloth.png",
    animalname: "Two-toed Sloth",
    animalsPlace: "Mesoamerica, South America",
    imageIcon: "../../assets/icons/banana-bamboo_icon.png",
  },
  {
    id: 5,
    hoverName: "Cheetahs",
    hoverplace: "Native to Africa",
    imageurl: "../../assets/images/cheetahs.png",
    animalname: "cheetahs",
    animalsPlace: "Native to Africa",
    imageIcon: "../../assets/icons/meet-fish_icon.png",
  },
  {
    id: 6,
    hoverName: "Penguins",
    hoverplace: "Native to Antarctica",
    imageurl: "../../assets/images/Penguins.png",
    animalname: "Penguins",
    animalsPlace: "Native to Antarctica",
    imageIcon: "../../assets/icons/meet-fish_icon.png",
  },
];
// animals.forEach(function (singleAnimal) {
//   htmlCode =
//     htmlCode +
//     `
//     <article class="animals__article">
//     <div class="animals__hover">
//       <h4 class="animals__hover__name">${singleAnimal.hoverName}</h4>
//       <p class="animals__hover__place">${singleAnimal.hoverplace}</p>
//     </div>
//     <img
//       class="animals__image"
//       src="${singleAnimal.imageurl}"
//       alt="${singleAnimal.hoverName}"
//     />
//     <div class="article__contect">
//       <div>
//         <h4 class="animals__name">${singleAnimal.animalname}</h4>
//         <p class="animals__place">${singleAnimal.animalsPlace}</p>
//       </div>
//       <img
//         src="${singleAnimal.imageIcon}"
//         alt="icon"
//       />
//     </div>
//   </article>
//     `;
// });

const leftSlide = document.querySelector(".arrow-left");

leftSlide.addEventListener("click", function () {
  let htmlCode = ``;
  const randomNumber = Math.floor(Math.random() * 6);
  for (let i = randomNumber; i < animals.length; i++) {
    htmlCode =
      htmlCode +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  for (let j = randomNumber - 1; j >= 0; j--) {
    htmlCode =
      htmlCode +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  const animalsCards = document.querySelector("#animals__wrapper-one");
  animalsCards.innerHTML = htmlCode;
  let htmlCodeTwo = ``;
  const randomNumberTwo = Math.floor(Math.random() * 6);
  for (let i = randomNumberTwo; i < animals.length; i++) {
    htmlCodeTwo =
      htmlCodeTwo +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  for (let j = randomNumberTwo - 1; j >= 0; j--) {
    htmlCodeTwo =
      htmlCodeTwo +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  const animalsCardsTwo = document.querySelector("#animals__wrapper-two");
  animalsCardsTwo.innerHTML = htmlCodeTwo;
  let htmlCodeThree = ``;
  const randomNumberThree = Math.floor(Math.random() * 6);
  for (let i = randomNumberThree; i < animals.length; i++) {
    htmlCodeThree =
      htmlCodeThree +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  for (let j = randomNumberThree - 1; j >= 0; j--) {
    htmlCodeThree =
      htmlCodeThree +
      `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
  }
  const animalsCardsThree = document.querySelector("#animals__wrapper-three");
  animalsCardsThree.innerHTML = htmlCodeThree;
});
const rightSlide = document.querySelector(".arrow-right");
rightSlide.addEventListener("click", function () {
  let htmlCode = ``;
  const randomNumber = Math.floor(Math.random() * 6);
  for (let i = randomNumber; i < animals.length; i++) {
    htmlCode =
      htmlCode +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
            <p class="animals__hover__place">${animals[i].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[i].imageurl}"
            alt="${animals[i].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[i].animalname}</h4>
              <p class="animals__place">${animals[i].animalsPlace}</p>
            </div>
            <img
              src="${animals[i].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  for (let j = randomNumber - 1; j >= 0; j--) {
    htmlCode =
      htmlCode +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
            <p class="animals__hover__place">${animals[j].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[j].imageurl}"
            alt="${animals[j].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[j].animalname}</h4>
              <p class="animals__place">${animals[j].animalsPlace}</p>
            </div>
            <img
              src="${animals[j].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  const animalsCards = document.querySelector("#animals__wrapper-one");
  animalsCards.innerHTML = htmlCode;
  let htmlCodeTwo = ``;
  const randomNumberTwo = Math.floor(Math.random() * 6);
  for (let i = randomNumberTwo; i < animals.length; i++) {
    htmlCodeTwo =
      htmlCodeTwo +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
            <p class="animals__hover__place">${animals[i].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[i].imageurl}"
            alt="${animals[i].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[i].animalname}</h4>
              <p class="animals__place">${animals[i].animalsPlace}</p>
            </div>
            <img
              src="${animals[i].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  for (let j = randomNumberTwo - 1; j >= 0; j--) {
    htmlCodeTwo =
      htmlCodeTwo +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
            <p class="animals__hover__place">${animals[j].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[j].imageurl}"
            alt="${animals[j].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[j].animalname}</h4>
              <p class="animals__place">${animals[j].animalsPlace}</p>
            </div>
            <img
              src="${animals[j].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  const animalsCardsTwo = document.querySelector("#animals__wrapper-two");
  animalsCardsTwo.innerHTML = htmlCodeTwo;
  let htmlCodeThree = ``;
  const randomNumberThree = Math.floor(Math.random() * 6);
  for (let i = randomNumberThree; i < animals.length; i++) {
    htmlCodeThree =
      htmlCodeThree +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
            <p class="animals__hover__place">${animals[i].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[i].imageurl}"
            alt="${animals[i].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[i].animalname}</h4>
              <p class="animals__place">${animals[i].animalsPlace}</p>
            </div>
            <img
              src="${animals[i].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  for (let j = randomNumberThree - 1; j >= 0; j--) {
    htmlCodeThree =
      htmlCodeThree +
      `
          <article class="animals__article">
          <div class="animals__hover">
            <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
            <p class="animals__hover__place">${animals[j].hoverplace}</p>
          </div>
          <img
            class="animals__image"
            src="${animals[j].imageurl}"
            alt="${animals[j].hoverName}"
          />
          <div class="article__contect">
            <div>
              <h4 class="animals__name">${animals[j].animalname}</h4>
              <p class="animals__place">${animals[j].animalsPlace}</p>
            </div>
            <img
              src="${animals[j].imageIcon}"
              alt="icon"
            />
          </div>
        </article>
          `;
  }
  const animalsCardsThree = document.querySelector("#animals__wrapper-three");
  animalsCardsThree.innerHTML = htmlCodeThree;
});

let htmlCode = ``;
const randomNumber = Math.floor(Math.random() * 6);
for (let i = randomNumber; i < animals.length; i++) {
  htmlCode =
    htmlCode +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
for (let j = randomNumber - 1; j >= 0; j--) {
  htmlCode =
    htmlCode +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
const animalsCards = document.querySelector("#animals__wrapper-one");
animalsCards.innerHTML = htmlCode;
let htmlCodeTwo = ``;
const randomNumberTwo = Math.floor(Math.random() * 6);
for (let i = randomNumberTwo; i < animals.length; i++) {
  htmlCodeTwo =
    htmlCodeTwo +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
for (let j = randomNumberTwo - 1; j >= 0; j--) {
  htmlCodeTwo =
    htmlCodeTwo +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
const animalsCardsTwo = document.querySelector("#animals__wrapper-two");
animalsCardsTwo.innerHTML = htmlCodeTwo;
let htmlCodeThree = ``;
const randomNumberThree = Math.floor(Math.random() * 6);
for (let i = randomNumberThree; i < animals.length; i++) {
  htmlCodeThree =
    htmlCodeThree +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[i].hoverName}</h4>
          <p class="animals__hover__place">${animals[i].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[i].imageurl}"
          alt="${animals[i].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[i].animalname}</h4>
            <p class="animals__place">${animals[i].animalsPlace}</p>
          </div>
          <img
            src="${animals[i].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
for (let j = randomNumberThree - 1; j >= 0; j--) {
  htmlCodeThree =
    htmlCodeThree +
    `
        <article class="animals__article">
        <div class="animals__hover">
          <h4 class="animals__hover__name">${animals[j].hoverName}</h4>
          <p class="animals__hover__place">${animals[j].hoverplace}</p>
        </div>
        <img
          class="animals__image"
          src="${animals[j].imageurl}"
          alt="${animals[j].hoverName}"
        />
        <div class="article__contect">
          <div>
            <h4 class="animals__name">${animals[j].animalname}</h4>
            <p class="animals__place">${animals[j].animalsPlace}</p>
          </div>
          <img
            src="${animals[j].imageIcon}"
            alt="icon"
          />
        </div>
      </article>
        `;
}
const animalsCardsThree = document.querySelector("#animals__wrapper-three");
animalsCardsThree.innerHTML = htmlCodeThree;
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll(".animals__wrapper");
//   // let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex - 1].style.display = "flex";
//   //   dots[slideIndex - 1].className += " active";
// }

let activeSlide = 0;
const slides = document.querySelectorAll(".animals__wrapper");

let left = document.querySelector(".arrow-left");

left.onclick = function () {
  updatePrevSlide();
};

let right = document.querySelector(".arrow-right");

right.onclick = function () {
  updateNextSlide();
};

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  activeSlide = prevSlide;
}
