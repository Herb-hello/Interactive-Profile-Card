const btnMi = document.getElementById("btn-mi");
const text = document.getElementById("hidden-text");
const card = document.querySelector(".profile-card");

btnMi.addEventListener("click", (e) => {
  // Write a JavaScript function that toggles the visibility of the additional details when the "More Info" button is clicked.
  text.classList.toggle("show-more");
  card.classList.toggle("show-more");

  // Implement logic to ensure that the button's text changes to "Less Info" when the additional details are visible and reverts back to "More Info" when hidden.
  if (btnMi.innerText === "More Info") {
    btnMi.innerText = "Less Info";
  } else {
    btnMi.innerText = "More Info";
  }
});
