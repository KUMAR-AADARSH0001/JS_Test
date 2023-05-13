// If Graps not exists so add this
let data = ["Apple", "Banana", "Mango", "Grraps"];

let value = "Grraps";

let index = data.indexOf("Banana") + 1;

if (data.includes(value) !== true) {
  data.splice(index, 0, value);
}

console.log(data);
