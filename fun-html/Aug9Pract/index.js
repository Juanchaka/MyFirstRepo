// const students = [
//     { name: 'Alice', age: 20, grades: [85, 92, 88] },
//     { name: 'Bob', age: 22, grades: [78, 81, 79] },
//     { name: 'Charlie', age: 23, grades: [95, 90, 93] },
//     { name: 'David', age: 21, grades: [70, 75, 72] }
// ];

// console.log(Math.pow(2));
// const averagGrade = students.forEach((grades) => {
//     let total = 0;
//     grades.grades.forEach((grade) => {
//         total += grade;
//     })
//     avg = (total/3).toFixed();
//     console.log(grades.name, "Avg. grade:",avg );
// });

// const studentSummaries = students.map((studentInfo) => {
//     console.log(studentInfo);
//     console.log(studentInfo.age);
//     console.log(studentInfo.name);
//     console.log(studentInfo.grades);
//     studentInfo.grades.forEach((grades) => {
//         let total = 0;
//         grades.grades.forEach((grade) => {
//             total += grade;
//         })
//         avg = (total/3).toFixed();
//         console.log(grades.name, "Avg. grade:",avg );
//     });
// })

// const test = {
//   Thing1: 1,
//   Thing2: 2,
//   somethingThing: {
//     This1: 3,
//     This2: 4,
//   },
// };

// console.log(test);
// console.log(test.Thing1)
// console.log(test.Thing2)
// console.log(test.somethingThing.This1)
// console.log(test.somethingThing.This2)

// const things = Object.keys(test);
// const numbers = Object.values(test);

// console.log(things);
// console.log(numbers);

// let addValues = 0;
// const traverseObj = (obj) => {
//   for (value in obj) {
//     if (typeof obj[value] !== "number") {
//       traverseObj(obj[value]);
//       continue;
//     } else {
//       addValues += obj[value];
//     }
//   }
//   return addValues;
// };

// console.log(traverseObj(test));

// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-26",
//       score: 47,
//     },
//   },
// ];

// const AssignmentGroup = {
//   id: 12345,
//   name: "Fundamentals of JavaScript",
//   course_id: 451,
//   group_weight: 25,
//   assignments: [
//     {
//       id: 1,
//       name: "Declare a Variable",
//       due_at: "2023-01-25",
//       points_possible: 50,
//     },
//     {
//       id: 2,
//       name: "Write a Function",
//       due_at: "2023-02-27",
//       points_possible: 150,
//     },
//     {
//       id: 3,
//       name: "Code the World",
//       due_at: "3156-11-15",
//       points_possible: 500,
//     },
//   ],
// };

// const totalPoints = (AG) => {
//     for (value in AG) {
//         if (typeof AG[value] === 'object') {
//             console.log(AG[value])
//             for (pp of AG[value]) {
//                 if(typeof pp === 'object'){
//                     for (value in pp){
//                         if(value === 'points_possible')
//                         console.log(pp[value])
//                     }
//                 }
//             }
//         }
//     }
// }

// totalPoints(AssignmentGroup);
// console.log(AssignmentGroup.assignments[0].points_possible);
// for(score of LearnerSubmissions.submisison) {
//     console.log(score)
// }

// let text = Object.assign(document.createElement("p"), {innerText: "This is a test \n"});

// document.body.appendChild(text);

// function dumb (n) {
// for(num = 0; num <= n; num++) {
//   let count = 0;
//   for(z = 1; z <= num; z++) {
//     if(num%z === 0){
//       count++;
//     };
//   };
//     if(count === 2){
//       // console.log(num);
//       text.innerText += num + '\n';
//     };
// };

// alert("CALCULATION FINISHED!");

// };

// dumb(100);

// const radio = {
//   station: [{
//     name: "Kiss103",
//     songs: [{
//       title: "some1",artist: "some1"
//     },
//     {
//       title: "random1",artist: "random1"
//     },
//     {
//       title: "song1", artist: "artist1"
//     }]
//   },
//   {
//     name: "POP104",
//     songs: [{
//       title: "another2", artist: "another2"
//     },
//     {
//       title: "random2",artist: "random2"
//     },
//     {
//       title: "song2", artist: "artist2"
//     }]
// }],

//   play() {
//     let random = Math.floor(Math.random() * radio.station.length);
//     let songs = radio.station[random].songs

//     let randomSong = Math.floor(Math.random() * songs.length);

//     console.log(`Now playing: ${songs[randomSong].title} by: ${songs[randomSong].artist}`);
//   }
// }

// radio.play();

// let counter = 0;

// function selfIncrement() {
//   counter++;
//   selfIncrement();
// };

// try {
//   selfIncrement();
// } catch (err) {
//   console.log(`CALL STACK SIZE:`, counter);
//   console.log(err);
// }

// const pEL = Object.assign(document.createElement('p'), {innerHTML: 'The fu*** <br>'});

// function something(n){
//   for(let i = 1; i <= n; i++){
//     let count = 0;
//     for(let j = 1; j <= i; j++){
//       if(i % j === 0){
//         count++
//       }
//     }
//     if(count === 2){
//       pEL.innerHTML += (i + '<br>');
//       // console.log(i);
//     }
//   }
//   setTimeout(() => {
//     alert("Calculation Finished");
//   }, 0);
// }

// something(100);

// document.body.appendChild(pEL);

// const person = {
//   name: {
//     first: 'Elyan',
//     last: 'Kemble',
//   },
//   age: 32,
//   location: {
//     city: 'Garland',
//     state: 'Texas',
//     zip: 75040
//   },
//   occupation: 'Front-End Developer',
//   introduce() {
//     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//   }
// }

// function introduce() {
//   console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// };

// person.introduce = introduce;

// person.introduce();

// const cat1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Orange",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   }
// }

// const cat2 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Black and White",
//   isAwake: false,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   }
// }

// const dog1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Gold",
//   isAwake: true,
//   isMoving: true,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Woof!");
//   }
// }

// const cow1 = {
//   eyes: 2,
//   legs: 4,
//   hair: "Brown",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Moo.");
//   }
// }

class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}
// const a1 = new Animal(7, 8, true, true);
// console.log(a1);

// const cat1 = new Animal(2, 4, true, false);
// console.log(cat1);
// console.log(cat1.toString());

// const cat2 = new Animal(2, 4, false, false);
// console.log(cat2);

// const dog1 = new Animal(2, 4, true, true);
// console.log(dog1);

// const cow1 = new Animal(2, 4, true, false);
// console.log(cow1);

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("moew");
  }
  toString() {
    return super.toString("cat");
  }
}

const cat1 = new Cat("orange", true, false);
console.log(cat1);
cat1.speak();
console.log(cat1.toString());

const cat2 = new Cat("black and white", false, false);

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("woof");
  }
  toString() {
    return super.toString("dog");
  }
}

const dog1 = new Dog("brown", true, true);
console.log(dog1);
dog1.speak();
console.log(dog1.toString());

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("moo");
  }
  toString() {
    return super.toString("cow");
  }
}

const cow1 = new Cow("black", true, false);
console.log(cow1);
cow1.speak();
console.log(cow1.toString());

class Human extends Animal {
  name = {
    first: "",
    last: "",
  };
  location = {
    city: "",
    state: "",
    zip: 0,
  };
  constructor(firstname, lastname, age, occup, city, state, zip) {
    super(2, 2);
    this.age = age;
    this.name.first = firstname;
    this.name.last = lastname;
    this.occupation = occup;
    this.location.city = city;
    this.location.state = state;
    this.location.zip = zip;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }
  eat(food) {
    if (food) {
      this.eat = true;
      console.log(`mmm. ${food} is delicious`);
    } else {
      this.eat = false;
      console.log(`Food does sound good, but I was not given any!`);
    }
  }
  toString() {
    return super.toString("human");
  }
}

const human1 = new Human(
  "Jake",
  "from State Farm",
  32,
  "doctor",
  "Calamazou",
  "Mazou",
  90210
);
console.log(human1);
human1.eat("hamburger");
human1.introduce();
console.log(human1.toString());


class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  get name (){
    return `${this.#name.first} ${this.#name.last}`;
  }
  addGrades(...grades) {
    grades = grades.flat(10);
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  get grades() {
    return this.#grades;
  }
}

const learner1 = new Learner("Leeroy", "Jenkins", 18);

console.log(learner1);
console.log(learner1.name);
learner1.name.first = "Bobby Brown";
console.log(learner1.name);
learner1.addGrades(10, 30, [1000, 67, 59, [40, 19, [60, 79]]]);
console.log(learner1.grades);