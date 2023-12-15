const {students, possibleClasses} = require("./students")

console.log(possibleClasses);
console.log(students);

// There are no test files for this.
// Use the array of students, pass it into your functions
// Look at the student data, or console.log, to see the specifics of the students
// Use that to see if the function is providing the correct output

// Calculate Class Average:
calculateStudentAverage = (students) => {
    return students.map(student => {
        let avg = student.scores.reduce((avg, score) => avg + score) / student.scores.length;
        student.averageScores = avg;
        return student;
    })
}

console.log(calculateStudentAverage(students))

// Calculate Class Average:


// Filter Students Above a Threshold:


// Weighted Averages:


// Modify Scores


// Highest Scoring Student


// Sort Students by Average Score


// Group Students by Score Range


// Find Top N Students

