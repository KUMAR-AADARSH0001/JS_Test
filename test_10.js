let data = [9, 3, 4, 8, 6, 7];

let data1 = 9;
let data2 = 7;

let index = data.indexOf(4);

data.splice(index, 0, data1, data2);

console.log(data);
