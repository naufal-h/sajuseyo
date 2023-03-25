function showImg(pic) {
  const categoryButtons = document.querySelectorAll(".category-buttons");
  categoryButtons.forEach((button) => button.classList.remove("selected"));
  document.querySelector(".big-img img").src = pic;
}
function hover(num) {
  for (let i = 1; i <= num; i++) {
    document.querySelector(".star" + i).src = "/assets/svg/star-fill.svg";
  }
  for (let i = num + 1; i <= 5; i++) {
    document.querySelector(".star" + i).src = "/assets/svg/star.svg";
  }
}
function hoverOut() {
  for (let i = 1; i <= 5; i++) {
    document.querySelector(".star" + i).src = "/assets/svg/star.svg";
  }
}

function categoryImg(pic, btnId) {
  const productImage = document.querySelector(".big-img img");
  const categoryButtons = document.querySelectorAll(".category-buttons");

  productImage.src = pic;
  categoryButtons.forEach((button) => {
    if (button.id === btnId) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

let qty = 1;
const unitPrice = 350000;

function increaseQty() {
  qty++;
  document.querySelector(".qty").innerText = qty;
  document.querySelector(".total-qty").innerText = qty;
  document.getElementById("totalPrice").innerHTML =
    "Rp. " + formatPrice(qty * unitPrice);
}

function decreaseQty() {
  if (qty > 1) {
    qty--;
    document.querySelector(".qty").innerText = qty;
    document.querySelector(".total-qty").innerText = qty;
    document.getElementById("totalPrice").innerHTML =
      "Rp. " + formatPrice(qty * unitPrice);
  }
}

function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
