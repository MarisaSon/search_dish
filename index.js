const search = document.querySelector(".search");
const dish = document.querySelectorAll(".dish");
search.addEventListener("keyup", () => {
  const word = search.value.toLowerCase();
  dish.forEach(function (item) {
    item.querySelector("p").textContent.toLowerCase().includes(word)
      ? (item.style.display = "block")
      : (item.style.display = "none");
  });
});
