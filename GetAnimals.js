const AnimalList = document.getElementById("AnimalList");

// URL da API
const apiUrl = 'https://freetestapi.com/api/v1/animals';

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

    data.forEach(animal => {
        const AnimalCard = document.createElement('div');
        AnimalCard.classList.add('CardAnimal');
        AnimalCard.setAttribute('id', animal.name);

        AnimalCard.innerHTML = `
          <div class="AnimalPhoto"><img src="${animal.image}"></div>
          
          <div class="AnimalDescription">
            <h1> Nome: ${animal.name}</h1>
            <p>Especie: ${animal.species}</p>
            <p>Dieta: ${animal.diet}</p>
            <p>Descrição: ${animal.description} </p>
          </div>`;

        AnimalList.appendChild(AnimalCard);
            
      })
    });

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
