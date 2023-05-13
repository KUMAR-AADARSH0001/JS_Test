const data = [
  {
    name: "palvi",
    class: "frontend",
  },
  {
    name: "nancy",
    class: "frontend",
  },
  {
    name: "muskan",
    class: "frontend",
  },
  {
    name: "shivam",
    class: "frontend",
  },
  {
    name: "aadarsh",
    class: "Backend",
  },
];

// for (var val = 0; val < data.length; val++) {
//   //   console.log(data[val]);
//   console.log("Name : " + data[val].name, "Class : " + data[val].class);
// }

data.map((value, index) => {
  console.log(index + ". ", value);
});
