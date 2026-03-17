const inputs = document.querySelectorAll('input');

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

// ------------------------ Functie voor scroll + view transition ------------------------ 
// Bron: met startViewTransition en ScrollIntoView heeft Viktor me geholpen
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