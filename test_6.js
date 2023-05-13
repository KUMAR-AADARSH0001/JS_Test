const data1 = "Rahul    is   a good   boy";
const data2 = "     Rahul is a good boy      ";
// console.log(/\s/g);

const new_data1 = data1.replace(/\s+/g, " ");
const new_data2 = data2.trim();

console.log(new_data1);
console.log(new_data2);
