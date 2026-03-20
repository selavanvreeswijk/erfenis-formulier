// Validatie --------------------------------------------------------------------------------------------------------------------------- 

const inputs = document.querySelectorAll('input');

// Hier laat hij het validatiebericht zien in mijn <p> error-message
// Bron: uitleg + workshop van Viktor
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

// Hier zorgt hij ervoor dat het formulier nog wel gevalideerd wordt met novalidate
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const inputs = form.querySelectorAll('input');

  let firstInvalid = null;

  inputs.forEach(input => {
    const error = input.parentElement.querySelector('.error-message');

    if (!input.checkValidity()){
      event.preventDefault();

      input.classList.add('error');
      input.classList.remove('success');

      if (error){
        error.textContent = "Please fill in this field correctly.";
      }

      if (!firstInvalid){
        firstInvalid = input;
      }

    } else {
      input.classList.remove('error');
      input.classList.add('success');

      if (error) {
        error.textContent = "";
      }
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
  }
});

// Functie voor scroll + view transition ---------------------------------------------------------------------------------------- 
// Bron: met startViewTransition en ScrollIntoView heeft Viktor me geholpen. 
// Hierna zelf met https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API uitgewerkt
function scrollMetTransitie(element, block = "center"){
  document.startViewTransition(() =>
    element.scrollIntoView({
      behavior: "smooth",
      block: block
    })
  );
};

// Vragen uitklappen
const getrouwd = document.querySelector('input[name="getrouwd"][value="ja"]');
const geregistreerdPartnerschap = document.querySelector('input[name="geregistreerd-partnerschap"][value="ja"]');
const kinderen = document.querySelector('input[name="kinderen"][value="ja"]');
const kinderenEerderOverleden = document.querySelector('input[name="kind-eerder-overleden"][value="ja"]');
const testament = document.querySelector('input[name="testament"][value="ja"]');

getrouwd.addEventListener("click", (event) => {
  // Bron: met de volgende twee regels heeft Vasilis me geholpen
  let parentFieldset = event.target.parentNode.parentNode.parentNode.nextElementSibling;
  volgendeVraag = parentFieldset.querySelector('.volgende-vraag');

  scrollMetTransitie(volgendeVraag)
});

geregistreerdPartnerschap.addEventListener("click", (event) => {
  let parentFieldset = event.target.parentNode.parentNode.nextElementSibling;
  volgendeVraag = parentFieldset.querySelector('.volgende-vraag');

  scrollMetTransitie(volgendeVraag);
});

kinderen.addEventListener("click", (event) => {
  let parentFieldset = event.target.parentNode.parentNode.nextElementSibling;
  volgendeVraag = parentFieldset.querySelector('.volgende-vraag');

  scrollMetTransitie(volgendeVraag);
});

kinderenEerderOverleden.addEventListener("click", (event) => {
  let parentFieldset = event.target.parentNode.parentNode.nextElementSibling;
  volgendeVraag = parentFieldset.querySelector('.volgende-vraag');

  scrollMetTransitie(volgendeVraag);
});

testament.addEventListener("click", (event) => {
  let parentFieldset = event.target.parentNode.parentNode.nextElementSibling;
  volgendeVraag = parentFieldset.querySelector('.volgende-vraag');

  console.log(parentFieldset);

  scrollMetTransitie(volgendeVraag);
});

// Adres in Nederland of het buitenland
const adresNederland = document.getElementById('adres-nederland');
const adresNederlandGeklikt = document.querySelector('input[value="nederland"]');
const adresBuitenland = document.getElementById('adres-buitenland');
const adresBuitenlandGeklikt = document.querySelector('input[value="buitenland"]');

adresNederlandGeklikt.addEventListener("click", () => {

    document.startViewTransition(() =>
        adresNederland.scrollIntoView({behavior:"smooth", block:"center"})
    );
});

adresBuitenlandGeklikt.addEventListener("click", () => {

  document.startViewTransition(() => 
        adresBuitenland.scrollIntoView({behavior:"smooth", block:"center"})
    );
});

// Submit button

document.getElementById("submit").addEventListener("click", () => {
    document.body.classList.add("submitted");
});