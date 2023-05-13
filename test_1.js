const data = [6, 9, 8, 4, 3, 6, 8, 7, 4,9,9];

const new_data = [];

for (var val = 0; val < data.length; val++) {
  let value = new_data.includes(data[val]);
  if (value === false) {
    new_data.push(data[val]);
  }
}

console.log(new_data);
