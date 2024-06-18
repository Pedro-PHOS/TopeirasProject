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
        console.log(data);

        data.forEach(animal => {

            const AnimalCard = document.createElement('div');
            AnimalCard.classList.add('CardAnimal');
            AnimalCard.setAttribute('id', animal.name);

            AnimalCard.innerHTML = `
                <div class="AnimalPhoto" > ${animal.image} </div>
                
                <div class="AnimalDescription">
                    <h1> Nome: ${animal.name}</h1>
                    <p>Especie: ${animal.species}</p>
                    <p>Dieta: ${animal.diet}</p>
                    <p>Descrição: ${animal.description} </p>
                </div>

            `;

            AnimalList.appendChild(AnimalCard);

        });

    });