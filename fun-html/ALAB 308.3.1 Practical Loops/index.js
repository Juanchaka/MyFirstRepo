//ALAB 308.3.1: Practical Loops
//Part 1: Fizz Buzz
for (i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("Fizz Buzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  };
};

//Part 2: Prime Time
let findPrimenums = 20;

for(num = 0; num <= findPrimenums; num++) {
  let count = 0;
  for(z = 1; z <= num; z++) {
    if(num%z === 0){
      count++;
    };
  };
    if(count === 2){
      console.log(num);
    };
};

let n = 1000;

for(num = n; num >= 0; num++) {
  let count = 0;
  for(z = 1; z <= num; z++) {
    if(num%z === 0){
      count++;
    };
  };
    if(count === 2){
      if (num === n) 
        {
          continue
        } else {
      console.log(num);
      break;
      };
    };
};


// const computeArea = (width, height) => {
//   return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units`
// }
// const planetHasWater = (planet) => {
//   if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars")
//     {
//       return true
//     } else {
//       return false
//     }
// }
// console.log(computeArea(10, 2));
// console.log(planetHasWater("Venus"));

// Part 3: Feeling Loopy
const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

const lines = csv.split('\n').filter(line => line.length > 0);

for (const line of lines) {
  const [id, x, y, z] = line.split(',');
  console.log(`${id}, ${x}, ${y}, ${z}`);
}


//`************ End of ALAB 308.3.1: Practical Loops ************`


//R-ALAB 308.4.1 - Working with Data Collections 
//CSV part 1
const csv1 = `
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
`

const lines1 = csv1.split('\n').filter(line => line.length > 0);

for (const line of lines1) {
  const [id, x, y, z] = line.split(',');
  console.log(`${id}, ${x}, ${y}, ${z}`);
}

//2D array - part 2
const test = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const twoDArray1 = test.split("\n").map((el) => el.split(","));
console.log(twoDArray1);


//2Day array/obj - part 3
const test_input = [["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]
const test_output = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

const attr = test_input.shift()

const result = test_input.map((el) => {
  const obj = {}
  attr.forEach((attr, i) => {
    obj[attr.toLowerCase()] = el[i]
  })
  return obj
})

console.log(result)

// part 4 remove last element

const part3_input = [["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]

const attrs = part3_input.shift()

const results = part3_input.map((el) => {
  const obj = {}
  attrs.forEach((attr, i) => {
    obj[attr.toLowerCase()] = el[i]
  })
  return obj
})

console.log(results)
let popped = results;

popped.pop();
console.log(popped);
