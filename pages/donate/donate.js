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
// Amount input start
const amountInput = document.querySelector("#number");
const priceInput = [5000, 2000, 1000, 500, 250, 100, 50, 25];
const labels = document.querySelectorAll(".price");
labels[5].classList.add("active-price");
labels[5].firstElementChild.checked = true;
labels.forEach((element) => {
  element.onclick = function () {
    let son = +element.textContent.slice(1);
    amountInput.value = son;
  };
});

amountInput.addEventListener("keyup", function () {
  let sumofInput = +amountInput.value;
  for (let i = 0; i <= priceInput.length; i++) {
    sumofInput == priceInput[i]
      ? labels[i].classList.add("active-price")
      : labels[i].classList.remove("active-price");
    if (sumofInput === priceInput[i]) {
      labels[i].firstElementChild.checked = true;
    } else {
      labels[i].firstElementChild.checked = false;
    }
  }
});
window.onload = function () {
  amountInput = document.querySelector("#number").value = 100;
};
