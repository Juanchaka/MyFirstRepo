// The provided course information
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

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

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-26",
      score: 47,
    },
  },
  {
    learner_id: 130,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-01-26",
      score: 47,
    },
  },
];

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  try {
    // Validate course ID in assignment group
    if (AssignmentGroup.course_id !== CourseInfo.id) {
      throw new Error("Assignment group does not belong to the specified course.");
    }

    // Helper function to parse dates
    function parseDate(dateStr) {
      try {
        return new Date(dateStr);
      } catch (error) {
        throw new Error("Invalid date format. Please enter date as yyyy-mm-dd");
      }
    }

    // Helper function to handle zero points_possible
    function avoid0Input(numerator, denominator) {
      return denominator === 0 ? 0 : numerator / denominator;
    }

    const results = {};

    // Process each assignment
    AssignmentGroup.assignments.forEach(assignment => {
      const assignmentId = assignment.id;
      const pointsPossible = assignment.points_possible;

      if (pointsPossible <= 0) {
        throw new Error("Points possible must be greater than zero.");
      }

      LearnerSubmissions.forEach(submission => {
        const learnerId = submission.learner_id;
        const learnerScore = submission.submission.score;
        const submissionDate = parseDate(submission.submission.submitted_at);
        const dueDate = parseDate(assignment.due_at);

        if (submissionDate < dueDate) return; // Skip if assignment is not yet due

        // Calculate penalty for late submission
        const penalty = submissionDate > dueDate ? 0.1 * pointsPossible : 0;

        if (!results[learnerId]) {
          results[learnerId] = {
            id: learnerId,
            totalPoints: 0,
            totalScore: 0,
            assignments: {}
          };
        }

        const actualScore = Math.max(0, learnerScore - penalty);
        const scorePercentage = avoid0Input(actualScore, pointsPossible) * 100;

        results[learnerId].assignments[assignmentId] = scorePercentage;

        // Update total points and total score
        results[learnerId].totalPoints += pointsPossible;
        results[learnerId].totalScore += actualScore;
      });
    });

    // Convert results object to array and calculate averages
    return Object.values(results).map(learner => ({
      id: learner.id,
      avg: learner.totalPoints === 0 ? 0 : (learner.totalScore / learner.totalPoints * 100),
      ...learner.assignments
    }));

  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));
