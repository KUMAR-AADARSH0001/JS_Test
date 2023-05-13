let data1 = [6, 9, 8, 7, 8, 5, 0];
let data2 = [4, 3, 2, 1, 0, 8, 9];

let con_data = data1.concat(data2);

let new_data = [];

for (var val = 0; val < con_data.length; val++) {
  let value = new_data.includes(con_data[val]);
  if (value !== true) {
    new_data.push(con_data[val]);
  }
}

console.log(new_data);
