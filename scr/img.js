export const imagesAnimal = [
    {id: 0, image: "/images/Lion.jpeg"},
    {id: 1, image: "/images/Elephant.jpeg"},
    {id: 2, image: "/images/Tiger.jpeg"},
    {id: 3, image: "/images/Kangaroo.jpeg"},
    {id: 4, image: "/images/Gorilla.jpeg"},
    {id: 5, image: "/images/Polar_Bear.jpeg"},
    {id: 6, image: "/images/Koala.jpeg"},
    {id: 7, image: "/images/Giraffe.jpeg"},
    {id: 8, image: "/images/Panda.jpeg"},
    {id: 9, image: "/images/Cheetah.jpeg"},
    {id: 10, image: "/images/Hippopotamus.jpeg"},
    {id: 11, image: "/images/Chimpanzee.jpeg"},
    {id: 12, image: "/images/Red_Panda.jpeg"},
    {id: 13, image: "/images/Komodo_Dragon.jpeg"},
    {id: 14, image: "/images/Orangutan.jpeg"},
    {id: 15, image: "/images/Platypus.jpeg"},
    {id: 16, image: "/images/Sloth.jpeg"},
    {id: 17, image: "/images/Pangolin.jpeg"},
    {id: 18, image: "/images/Quokka.jpeg"},
    {id: 19, image: "/images/Fennec_Fox.jpeg"},
    {id: 20, image: "/images/Armadillo.jpeg"},
    {id: 21, image: "/images/Tapir.jpeg"},
    {id: 22, image: "/images/Red_Fox.jpeg"},
    {id: 23, image: "/images/Arctic_Wolf.jpeg"},
    {id: 24, image: "/images/Serval.jpeg"},
    {id: 25, image: "/images/Jaguar.jpeg"},
    {id: 26, image: "/images/Gazelle.jpeg"},
    {id: 27, image: "/images/Spectacled_Bear.jpeg"},
    {id: 28, image: "/images/Lemur.jpeg"},
    {id: 29, image: "/images/Capybara.jpeg"},
    {id: 30, image: "/images/Zebra.jpeg"},
    {id: 31, image: "/images/Arctic_Fox.jpeg"},
    {id: 32, image: "/images/Gibbon.jpeg"},
    {id: 33, image: "/images/Fossa.jpeg"},
    {id: 34, image: "/images/Puma.jpeg"},
    {id: 35, image: "/images/Gray_Wolf.jpeg"},
    {id: 36, image: "/images/Bison.jpeg"},
    {id: 37, image: "/images/Gharial.jpeg"},
    {id: 38, image: "/images/Black_Rhinoceros.jpeg"},
    {id: 39, image: "/images/Mandrill.jpeg"},
    {id: 40, image: "/images/Beluga_Whale.jpeg"},
    {id: 41, image: "/images/Manatee.jpeg"},
    {id: 42, image: "/images/Snow_Leopard.jpeg"},
    {id: 43, image: "/images/Leopard_Seal.jpeg"},
    {id: 44, image: "/images/Okapi.jpeg"},
    {id: 45, image: "/images/Red-eyed_Tree_Frog.jpeg"},
    {id: 46, image: "/images/Chameleon.jpeg"},
    {id: 47, image: "/images/Blue_Whale.jpeg"},
    {id: 48, image: "/images/Mongoose.jpeg"},
  ];
  

  .then(data => {

    console.log(data)

    data.forEach(animal => {
        const AnimalCard = document.createElement('div');
        AnimalCard.classList.add('CardAnimal');
        AnimalCard.setAttribute('id', animal.image);

        imagesAnimal.forEach(getImage => {
          for(let i = 0; imagesAnimal[i].id != animal.id; i++ ){

            console.log(i)

            const idImage = imagesAnimal[i].image;

            AnimalCard.innerHTML = `
              <div class="AnimalPhoto"><img src="${idImage}"></div>
              
              <div class="AnimalDescription">
                <h1> Nome: ${animal.image}</h1>
                <p>Especie: ${animal.species}</p>
                <p>Dieta: ${animal.diet}</p>
                <p>Descrição: ${animal.description} </p>
              </div>`;

            AnimalList.appendChild(AnimalCard);
            
          }
      })
    })
  });