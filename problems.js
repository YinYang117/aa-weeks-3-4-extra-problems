const { students, possibleClasses } = require("./students")

console.log(possibleClasses);
console.log(students);
console.log("********");

// There are no test files for this.
// Use the array of students, pass it into your functions
// Look at the student data for specifics of the students
// Then use that to see if the function is providing the correct output

// Calculate Student Average::
calculateStudentAverage = (students) => {
    return students.map(student => {
        let sumScore = student.scores.reduce((acc, score) => acc + score);
        let avgScore = (sumScore / student.scores.length).toFixed(2);
        student.avgScore = avgScore;
        return student
    })
}
console.log(calculateStudentAverage(students))



// Calculate Class Average:
calculateClassAverage = (students) => {
    let classesObj = {};

    students.forEach(student => {
        let scores = student.scores;
        let classes = student.classes;

        for (let i = 0; i < scores.length; i++) {
            let score = scores[i];
            let singleClass = classes[i];
            if (classes[singleClass]) {
                classes[singleClass].push(score)
            } else classes[singleClass] = [score];
        }
    });

    for (let eachClass in classesObj) {
        
    }

}


// Filter Students Above a Threshold:


// Weighted Averages:


// Modify Scores


// Highest Scoring Student


// Sort Students by Average Score


// Group Students by Score Range


// Find Top N Students

