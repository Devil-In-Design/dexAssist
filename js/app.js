// add in pokemon go team rocket counter guides
// add in combo weakness
// add resistance sets
// store the popup msg in a variable, then select the html element by id and set el.innerHTML = msg

const form = document.querySelector("#main");
const blink = document.querySelector("#type-input");
const button = document.querySelector("#submit");
const heading = document.querySelector("h1");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const weakness = document.getElementById("weakness");
const resistance = document.getElementById("resistance");
const weakImg = document.getElementById("weakImg");
const resImg = document.getElementById("resImg");
const types = [
  {
    type: "normal",
    weakness: "fighting",
    resistance: "none",
    imgFile: 'icon-set/icons/normal.svg',
  },
  {
    type: "fighting",
    weakness: "flying, psychic, fairy",
    resistance: "dark, rock, bug",
    imgFile: 'icon-set/icons/fighting.svg',
  },
  {
    type: "flying",
    weakness: "rock, electric, ice",
    resistance: "fighting, bug, grass",
    imgFile: 'icon-set/icons/flying.svg',
  },
  {
    type: "poison",
    weakness: "ground, psychic",
    resistance: "fighting, poison, bug, grass, fairy",
    imgFile: 'icon-set/icons/poison.svg',
  },
  {
    type: "ground",
    weakness: "water, grass, ice",
    resistance: "poison, rock",
    imgFile: 'icon-set/icons/ground.svg',
  },
  {
    type: "rock",
    weakness: "fighting, ground, steel, water, grass",
    resistance: "normal, flying, poison, fire",
    imgFile: 'icon-set/icons/rock.svg',
  },
  {
    type: "bug",
    weakness: "flying, rock, fire",
    resistance: "fighting, ground, grass",
    imgFile: 'icon-set/icons/bug.svg',
  },
  {
    type: "ghost",
    weakness: "ghost, dark",
    resistance: "poison, bug",
    imgFile: 'icon-set/icons/ghost.svg',
  },
  {
    type: "steel",
    weakness: "fighting, ground, fire",
    resistance:
      "normal, flying, rock, bug, steel, grass, psychic, ice, dragon, fairy",
    imgFile: 'icon-set/icons/steel.svg',
  },
  {
    type: "fire",
    weakness: "ground, rock, water",
    resistance: "bug, steel, fire, grass, ice, fairy",
    imgFile: 'icon-set/icons/fire.svg',
  },
  {
    type: "water",
    weakness: "grass, electric",
    resistance: "steel, fire, water, ice",
    imgFile: 'icon-set/icons/water.svg',
  },
  {
    type: "grass",
    weakness: "flying, poison, bug, fire, ice",
    resistance: "ground, water, grass, electric",
    imgFile: 'icon-set/icons/grass.svg',
  },
  {
    type: "electric",
    weakness: "ground",
    resistance: "flying, steel, electric",
    imgFile: 'icon-set/icons/electric.svg',
  },
  {
    type: "psychic",
    weakness: "bug, ghost, dark",
    resistance: "fighting, psychic",
    imgFile: 'icon-set/icons/psychic.svg',
  },
  {
    type: "ice",
    weakness: "fighting, rock, steel, fire",
    resistance: "ice",
    imgFile: 'icon-set/icons/ice.svg',
  },
  {
    type: "dragon",
    weakness: "ice, dragon, fairy",
    resistance: "fire, water, grass, electric",
    imgFile: 'icon-set/icons/dragon.svg',
  },
  {
    type: "dark",
    weakness: "fighting, bug, fairy",
    resistance: "ghost, dark",
    imgFile: 'icon-set/icons/dark.svg',
  },
  {
    type: "fairy",
    weakness: "poison, ghost, dragon",
    resistance: "fighting, bug, dark",
    imgFile: 'icon-set/icons/fairy.svg',
  },
];

findType = (input) => {
  let obj = types.find((o) => o.type == input);
  return obj ? obj.weakness : console.log("Error");
};

findRes = (input) => {
  let obj2 = types.find((o) => o.type == input);
  return obj2 ? obj2.resistance : console.log("Error");
};

findImg = (input) => {
  let objI = types.find((o) => o.type == input);
  return objI ? objI.imgFile : console.log("No Image Loaded");
};

getImage = (input) => { 
  let img = new Image(); 
  weakImg.innerHTML =  img;
  weakImg.appendChild(img); 
}  










// findType = (input) => {
//  if( types.includes(`${input}`)){
//   weakness.innerText = findType(input);
//  };
// };

// let results = [];

// Event Listeners

button.addEventListener("click", () => {
  //   console.log("You clicked me!");
  //popup
  popup.style.display = "block";
  blink.style.display = "none";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("type-input").value.toLowerCase().trim();
  let image = types.find(type => type).imgFile;
  console.log(image);
  getImage(image);

  
  

  // console.log(findType(input));
  weakness.innerText = findType(input);
  
  resistance.innerText = findRes(input);

  weakImg.innerHTML = `<img src="${image}" />` ;

  // popup.innerHTML = `${input}.classList.remove("hide")`;

  form.reset();
  blink.style.display = "block";
});

// class of hide on the images initially. need to set up js to show the appropriate symbol with the response for input. 

// add in pokemon go team rocket counter guides
// add in combo weakness
// add resistance sets
// store the popup msg in a variable, then select the html element by id and set el.innerHTML = msg

// Dex Info

// function Dex(type, weak, resist){
// 	this.type = type;
// 	this.weak = weak;
// 	this.resist = resist;
//     // this. // function
// };



// let request = new XMLHttpRequest();
// let url = "https://pokeapi.co/api/v2/"; // add api url
// request.open("GET", url, true);
// request.send();
// let response = request.responseText;
// console.log(request.responseText);
// let data =  JSON.stringify(response);
// console.log(data);
// console.log(data["text"]);





// pokedex api example
/*
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    -—---------------------
    
    
    
    
    
    maybe store the find() returns in variables on a global scale, and then call them with literal notation later on click  this could pull the img and data at the same time. possible to integrate the api here? turn the popup into an html element on display?
    
    */
    