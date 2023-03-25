function showImg(pic) {
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
