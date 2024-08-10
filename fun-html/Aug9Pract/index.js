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

const test = {
  Thing1: 1,
  Thing2: 2,
  somethingThing: {
    This1: 3,
    This2: 4,
  },
};

// console.log(test);
// console.log(test.Thing1)
// console.log(test.Thing2)
// console.log(test.somethingThing.This1)
// console.log(test.somethingThing.This2)

// const things = Object.keys(test);
// const numbers = Object.values(test);

// console.log(things);
// console.log(numbers);

let addValues = 0;
const traverseObj = (obj) => {
  for (value in obj) {
    if (typeof obj[value] !== "number") {
      traverseObj(obj[value]);
      continue;
    } else {
      addValues += obj[value];
    }
  }
  return addValues;
};

console.log(traverseObj(test));

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-26",
      score: 47,
    },
  },
];

const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const totalPoints = (AG) => {
    for (value in AG) {
        if (typeof AG[value] === 'object') {
            console.log(AG[value])
            for (pp of AG[value]) {
                if(typeof pp === 'object'){
                    for (value in pp){
                        if(value === 'points_possible')
                        console.log(pp[value])
                    }
                }
            }
        }
    }
}

totalPoints(AssignmentGroup);
console.log(AssignmentGroup.assignments[0].points_possible);
for(score of LearnerSubmissions.submisison) {
    console.log(score)
}