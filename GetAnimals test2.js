const AnimalList = document.getElementById("AnimalList");
const showPage = document.getElementById('Pagina');
const apiUrl = 'https://freetestapi.com/api/v1/animals';

let pag = 1;
let animalsData = [];

showPage.innerHTML = pag;

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
    loadPage(pag); // Carregar a primeira página
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

  AnimalList.appendChild(AnimalCard);
}

function loadPage(page) {
  AnimalList.innerHTML = ''; // Limpar a lista atual
  const start = (page - 1) * 10;
  const end = start + 10;
  for (let i = start; i < end && i < animalsData.length; i++) {
    cardgenerator(i, animalsData);
  }
}

function next() {
  if (pag < Math.ceil(animalsData.length / 10)) {
    pag += 1;
    showPage.innerHTML = pag;
    loadPage(pag);
  }
}

function previous() {
  if (pag > 1) {
    pag -= 1;
    showPage.innerHTML = pag;
    loadPage(pag);
  }
}

function searchAnimal() {
  const searchInput = document.getElementById("SearchInput");
  const filter = searchInput.value.toUpperCase();
  const items = document.getElementsByClassName("CardAnimal");

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
