const AnimalList = document.getElementById("AnimalList");

// URL da API
const apiUrl = 'https://freetestapi.com/api/v1/animals';

let pag = 1;

const showPage = document.getElementById('Pagina')
showPage.innerHTML = pag

// Fazer uma requisição GET
fetch(apiUrl)
  .then(response => {
    // Verificar se a resposta é bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na rede: ' + response.statusText);
    }
    return response.json(); // Converter a resposta para JSON
  }).then((response) => {
  
  })

function cardgenerator(i, data){
  const AnimalCard = document.createElement('div');
  AnimalCard.classList.add('CardAnimal');
  AnimalCard.setAttribute('id', data[i].name);

  AnimalCard.innerHTML = `
    <div class="AnimalPhoto"><img src="${data[i].image}"></div>
    
    <div class="AnimalDescription">
      <h1> Nome: ${data[i].name}</h1>
      <p>Especie: ${data[i].species}</p>
      <p>Dieta: ${data[i].diet}</p>
      <p>Descrição: ${data[i].description} </p>
    </div>`;

  AnimalList.appendChild(AnimalCard);
}

function next(i){
  pag += 1;
  showPage.innerHTML = pag

  if(pag == 1){
    let x = 10;
    for(let i = 0; i < x; i++){
      cardgenerator(i)
    }
  }

  if(pag == 2){
    let x = 20
    for(let i = 10; i < x; i++){
      cardgenerator(i)
    }
  }

  if(pag == 3){
    let x = 30
    for(let i = 20; i < x; i++){
      cardgenerator(i)
    }
  }
}
  
function Preview(){
  pag -= 1;
  showPage.innerHTML = pag
  console.log(pag)

  if(pag == 1){
    let x = 10;
    for(let i = 0; i < x; i++){
      cardgenerator(i)
    }
  }

  if(pag == 2){
    let x = 20
    for(let i = 10; i < x; i++){
      cardgenerator(i)
    }
  }

  if(pag == 3){
    let x = 30
    for(let i = 20; i < x; i++){
      cardgenerator(i)
    }
  }
}



function SearchAnimal() {

  // Obtém o valor de entrada do usuário e converte para maiúsculas
  const searchInput = document.getElementById("SearchInput");
  const filter = searchInput.value.toUpperCase();

  // Obtém todos os elementos com a classe 'CardAnimal'
  const items = document.getElementsByClassName("CardAnimal");

  // Itera sobre todos os itens
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const idValue = item.id.toUpperCase(); // Obtém o ID do elemento e converte para maiúsculas

    // Verifica se o filtro está presente no ID do item
    if (idValue.indexOf(filter) > -1) {
      item.style.display = ""; // Exibe o item se corresponder ao filtro
    } else {
      item.style.display = "none"; // Oculta o item se não corresponder ao filtro
    }
  }
}
