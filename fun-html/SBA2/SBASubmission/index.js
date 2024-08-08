// // //data input 1
// // const data_input1 = {
// //   id: number,
// //   name: string,
// // };

// // //data input 2
// // const datd_input2 = {
// //   id: number,
// //   name: string,
// //   // the ID of the course the assignment group belongs to
// //   course_id: number,
// //   // the percentage weight of the entire assignment group
// //   group_weight: number,
// //   assignments: [AssignmentInfo],
// // };

// // //data input 3
// // const datd_input3 = {
// //   id: number,
// //   name: string,
// //   // the due date for the assignment
// //   due_at: Date, //string
// //   // the maximum points possible for the assignment
// //   points_possible: number,
// // };

// // //data input 4
// // const datd_input4 = {
// //   learner_id: number,
// //   assignment_id: number,
// //   submission: {
// //     submitted_at: Date, //string
// //     score: number,
// //   },
// // };

// function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
//   console.log(CourseInfo);
//   console.log(AssignmentGroup.id);
//   console.log(AssignmentGroup.course_id);
//   console.log(AssignmentGroup.group_weight);
//   console.log(AssignmentGroup.assignments);
//   AssignmentGroup.assignments.forEach(() => {
//     console.log();
//   });
//   console.log(
//     AssignmentGroup.assignments.map((element) => {

//     }));
//   {
//     if (
//       typeof CourseInfo.id !== "number" /**||
//     typeof(AssignmentGroup.id) !== 'number' ||
//     typeof(AssignmentGroup.course_id) !== 'number' ||
//     typeof(AssignmentGroup.group_weight) !=='number' ||
//     typeof(AssignmentGroup.assignments.forEach((key, value) => {
//     console.log(value)})) !== 'number' ||
//     typeof(AssignmentGroup.assignments.points_possible) !== 'number'**/
//     ) {
//       throw Error("Please input a number");
//     }
//   }
// }

// getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);
// // const AssignmentGroup = {
// //     id: 12345,
// //     name: "Fundamentals of JavaScript",
// //     course_id: 451,
// //     group_weight: 25,
// //     assignments: [
// //       {
// //         id: 1,
// //         name: "Declare a Variable",
// //         due_at: "2023-01-25",
// //         points_possible: 50,
// //       },

// testing

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
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

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
];

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  // function isNumber(value) {
  //   if (typeof value !== "number" && isNaN(value)) {
  //     throw Error(`Please enter a valid number`);
  //   }
  // }

  // if (AssignmentGroup.course_id !== CourseInfo.id) {
  //   throw Error(`Assignment group does not belong to course`);
  // }

  // for (assignment of AssignmentGroup.assignments) {
  //   if (
  //     isNumber(assignment.points_possible) ||
  //     assignment.points_possible <= 0
  //   ) {
  //     console.log(assignment.points_possible);
  //     throw Error(`Please enter valid "points_possible" number greater than 0`);
  //   }
  // }

  function calculateAssignmentScore(submission, assignment) {
    let score = submission.score;
    // if (isNumber(score) || isNumber(assignment.points_possible)) {
    // console.log(score, assignment.points_possible);
    //   throw Error(`Invalid score or points_possible.`);
    // }
    // else if (assignment.points_possible === 0 || score === 0) {
    //   return 0;
    // }
    const onTime = new Date(submission.submitted_at);
    const dueDate = new Date(assignment.due_at);
    if (onTime < dueDate) {
      score = assignment.points_possible;
    }
    return score / assignment.points_possible;
  }

  const learners = {};

  for (const assignment of AssignmentGroup.assignments) {
    const assignmentId = assignment.id;
    const pointsPossible = assignment.points_possible;
    const due = assignment.due_at;
    // if (isNumber(pointsPossible) || pointsPossible <= 0) continue;
    for (const submission of LearnerSubmissions) {
      const {
        learner_id,
        assignment_id,
        submission: { score, submitted_at },
      } = submission;
      if (assignment_id === assignmentId) {
        const submissionDate = new Date(submitted_at);
        const dueDate = new Date(due);
        if (submissionDate <= dueDate) {
          const percentageScore = calculateAssignmentScore(
            submission.submission,
            assignment
          );
          if (percentageScore.error) {
            return { error: percentageScore.error };
          }
          if (!learners[learner_id]) {
            learners[learner_id] = {
              id: learner_id,
              avg: 0,
              scores: {},
            };
          }
          learners[learner_id].scores[assignmentId] = percentageScore;
          console.log(learners);
        }
      }
    }
  }

  for (const learner of Object.values(learners)) {
    let totalWeightedScore = 0;
    let totalWeight = 0;

    for (const assignmentId of Object.keys(learner.scores)) {
      const assignment = AssignmentGroup.assignments.find(
        (a) => a.id === parseInt(assignmentId)
      );
      if (assignment) {
        const weight = AssignmentGroup.group_weight;
        const score = learner.scores[assignmentId];
        totalWeightedScore +=
          score * assignment.points_possible * (weight / 100);
        totalWeight += assignment.points_possible * (weight / 100);
      }
    }

    learner.avg =
      totalWeight === 0 ? 0 : (totalWeightedScore / totalWeight) * 100;
  }

  return Object.values(learners);
}

getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);