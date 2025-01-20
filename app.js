const form = document.getElementById("form");
const displayData = document.getElementById("data");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formDataResult = new FormData(form);
  const formDataObject = Object.fromEntries(formDataResult);
  console.log(formDataObject.query);
});

async function findPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return await response.json();
}

async function displayPokemon() {
  const data = await findPokemon();
  displayData.innerHTML = "<h1>" + data.results[0].name + "</h1>";
}

displayPokemon();
