const inputs = document.querySelectorAll("input");

// Bron: uitleg + workshop van Victor
inputs.forEach(input => {

  input.addEventListener("blur", () => {

    const errorMessage = input.parentElement.querySelector(".error-message");

    if (!input.checkValidity()) {

      input.classList.remove("success");
      input.classList.add("error");

      errorMessage.textContent = input.validationMessage;
      errorMessage.style.display = "block";

    } else {

      input.classList.remove("error");
      input.classList.add("success");

      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
  });
});