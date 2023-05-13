// Remove 8 from this array
let data = [6, 7, 8, 9, 4];

if (data.includes(0)) {
  let val = data.indexOf(8);
  data.splice(val, 1);
}

console.log(data);
