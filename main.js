const contactButton = document.getElementById("contactUsButton");
const popupForm = document.getElementById("popupForm");
const closeButton = document.getElementById("closeButton");
const cancelButton = document.getElementById("cancel");

const showPopupForm = () => {
  popupForm.style.display = "flex"; // Show the form
};

const hidePopupForm = () => {
  popupForm.style.display = "none"; // Hide the form
};

contactButton.addEventListener("click", showPopupForm);
closeButton.addEventListener("click", hidePopupForm);
cancelButton.addEventListener("click", hidePopupForm);

// Hide the form if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    hidePopupForm();
  }
});
