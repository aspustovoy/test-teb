const openBtns = document.querySelectorAll(".openPopupBtn");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".close");

openBtns.forEach((btn) => {
  btn.onclick = () => {
    const popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
  };
});

closeBtns.forEach((btn) => {
  btn.onclick = () => {
    const popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "none";
  };
});

window.onclick = (event) => {
  popups.forEach((popup) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
};
