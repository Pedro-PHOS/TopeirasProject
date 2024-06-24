const animalList = document.getElementById("animalList");
const showPage = document.getElementById('Pagina');
const apiUrl = 'https://freetestapi.com/api/v1/animals';
const searchBar = document.getElementById('searchBar');


let page = 1;
let animalsData = [];

showPage.innerHTML = page;

// Fazer uma requisição GET
fetch(apiUrl)
  .then(response => {
    // Verificar se a resposta é bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na rede: ' + response.statusText);
    }
    return response.json(); // Converter a resposta para JSON
  })
  .then(data => {
    animalsData = data;
    let Filter = false;
    loadPage(page, Filter); // Carregar a primeira página
  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error);
  });

function cardgenerator(i, data){
  const AnimalCard = document.createElement('div');
  AnimalCard.classList.add('CardAnimal');
  AnimalCard.setAttribute('id', data[i].name);

  AnimalCard.innerHTML = `
    <div class="AnimalPhoto"><img src="${data[i].image}"></div>
    <div class="AnimalDescription">
      <h1>Nome: ${data[i].name}</h1>
      <p>Especie: ${data[i].species}</p>
      <p>Dieta: ${data[i].diet}</p>
      <p>Descrição: ${data[i].description}</p>
    </div>`;

  animalList.appendChild(AnimalCard);
}

function loadPage(page, Filter) {
  if(Filter == true){
    let x = 50
    myAss(x)
  }
  else{let x = 10
    myAss(x)
  }

  function myAss(x){
    animalList.innerHTML = ''; // Limpar a lista atual
    const start = (page - 1) * 10;
    const end = start + x;
    for (let i = start; i < end && i < animalsData.length; i++) {
      cardgenerator(i, animalsData);
    }
  }
}

function Next() {
  if (page < Math.ceil(animalsData.length / 10)) {
    page += 1;
    showPage.innerHTML = page;
    loadPage(page);
  }
}

function Preview() {
  if (page > 1) {
    page -= 1;
    showPage.innerHTML = page;
    loadPage(page);
  }
}

function SearchAnimal() {
  const searchInput = document.getElementById("SearchInput");
  const filter = searchInput.value.toUpperCase();
  const items = document.getElementsByClassName("CardAnimal");

  let Filter = true;

  loadPage(1, Filter);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const idValue = item.id.toUpperCase();

    if (idValue.indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}
