document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const form = document.getElementById("registration-form");

const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // feedbackDiv.textContent = "Form submission prevented. Ready for validation!";
});

