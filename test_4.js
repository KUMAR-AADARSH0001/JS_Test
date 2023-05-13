// Remove Set and add data1 and data2 in array
let main_data = ["Rat", "Cat", "Sat", "Mat"];

let data1 = "Suman";

let data2 = "Rahul";

let index = main_data.indexOf("Sat");

main_data.splice(index, 1, data1, data2);

console.log(main_data);
