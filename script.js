const searchBtn = document.getElementById("searchBtn");
const popup = document.getElementById("popup");

searchBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

function closePopup() {
  popup.classList.add("hidden");
}
