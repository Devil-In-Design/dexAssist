// add in pokemon go team rocket counter guides
// add in combo weakness
// add resistance sets
// store the popup msg in a variable, then select the html element by id and set el.innerHTML = msg

const form = document.querySelector("#main");
const button = document.querySelector("#submit");
const heading = document.querySelector("h1");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const weakness = document.getElementById("weakness");
const resistance = document.getElementById("resistance");
const types = [
  {
    type: "normal",
    weakness: "fighting",
    resistance: "none",
  },
  {
    type: "fighting",
    weakness: "flying, psychic, fairy",
    resistance: "dark, rock, bug",
  },
  {
    type: "flying",
    weakness: "rock, electric, ice",
    resistance: "fighting, bug, grass",
  },
  {
    type: "poison",
    weakness: "ground, psychic",
    resistance: "fighting, poison, bug, grass, fairy",
  },
  {
    type: "ground",
    weakness: "water, grass, ice",
    resistance: "poison, rock",
  },
  {
    type: "rock",
    weakness: "fighting, ground, steel, water, grass",
    resistance: "normal, flying, poison, fire",
  },
  {
    type: "bug",
    weakness: "flying, rock, fire",
    resistance: "fighting, ground, grass",
  },
  {
    type: "ghost",
    weakness: "ghost, dark",
    resistance: "poison, bug",
  },
  {
    type: "steel",
    weakness: "fighting, ground, fire",
    resistance:
      "normal, flying, rock, bug, steel, grass, psychic, ice, dragon, fairy",
  },
  {
    type: "fire",
    weakness: "ground, rock, water",
    resistance: "bug, steel, fire, grass, ice, fairy",
  },
  {
    type: "water",
    weakness: "grass, electric",
    resistance: "steel, fire, water, ice",
  },
  {
    type: "grass",
    weakness: "flying, poison, bug, fire, ice",
    resistance: "ground, water, grass, electric",
  },
  {
    type: "electric",
    weakness: "ground",
    resistance: "flying, steel, electric",
  },
  {
    type: "psychic",
    weakness: "bug, ghost, dark",
    resistance: "fighting, psychic",
  },
  {
    type: "ice",
    weakness: "fighting, rock, steel, fire",
    resistance: "ice",
  },
  {
    type: "dragon",
    weakness: "ice, dragon, fairy",
    resistance: "fire, water, grass, electric",
  },
  {
    type: "dark",
    weakness: "fighting, bug, fairy",
    resistance: "ghost, dark",
  },
  {
    type: "fairy",
    weakness: "poison, ghost, dragon",
    resistance: "fighting, bug, dark",
  },
];

// let results = [];

// Event Listeners

button.addEventListener("click", () => {
  //   console.log("You clicked me!");
  //popup
  popup.style.display = "block";
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

  findType = (input) => {
    let obj = types.find((o) => o.type == input);
    return obj ? obj.weakness : console.log("Error");
  };

  findRes = (input) => {
    let obj = types.find((o) => o.type == input);
    return obj ? obj.resistance : console.log("Error");
  };

  // ^^^^ here we add a code copy of the findType above, but geared for the resistance

  // console.log(findType(input));
  weakness.innerText = findType(input).toUpperCase();
  resistance.innerText = findRes(input).toUpperCase();

  form.reset();
});




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
