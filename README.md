# JavaScript Challenge: Advanced Array Operations and Closures

## Problem Statement

You are tasked with implementing a utility that processes a dataset of students and their exam scores. The goal is to perform various operations using advanced array methods, objects, and closures.

### Steps

1. **The Dataset:**
   - An array of student objects, where each object has the following properties:
     - `firstName` (string): Student's first name.
     - `lastName` (string): Student's last name.
     - `scores` (array): An array of exam scores (numbers).
     - `classes` (array): An array of classes corresponding with the scores array (strings).

   ```javascript
   // Example Input
   const students = [
    {
      firstName: 'Carter',
      lastName: 'Adams',
      scores: [83, 76, 79, 75, 81],
      classes: ['Physics', 'History', 'Computer Science', 'Psychology', 'Art']
    },
    {
      firstName: 'Scarlett',
      lastName: 'Cox',
      scores: [74, 81, 77, 79, 75],
      classes: ['Physics', 'History', 'Computer Science', 'Psychology', 'Music']
    }
     // etc...
   ];


2. **Calculate Class Average:**
    - Implement a function to calculate the average score for the entire class.
    - Use the map and reduce array methods.

3. **Calculate Class Average:**
    - Implement a function to calculate the average score for the entire class.
    - Use the map and reduce array methods.

4. **Filter Students Above a Threshold:**
    - Implement a function that filters students with an average score above a given threshold.
    - Use the filter array method.

5. **Weighted Averages:**
    - Implement closure for calculating a weighted average for each student.
    - The outer function should take in a weight array with one index for each score
    - The outer function should return a function
        - The inner function should take in an array of students and return the weighted average for the class.

    **Weighted Averages Explanation:**

    The goal is to create a closure that takes a student object and calculates the weighted average based on the provided weights.
    Here's an example how the math could be done:

    1. Initialize variables:

    - weightedSum: Start with a sum of zero, which will be used to accumulate the weighted scores.
    - totalWeight: Start with a total weight of zero, which will be used to normalize the result.

    2. Iterate over scores:

    - Use a loop to iterate over each score in the student's scores array.

    3. Calculate weighted sum:

    - For each score, multiply it by the corresponding weight from the weights array.
    - Add the result to the weightedSum.
    
    4. Calculate total weight:

    - Add each weight from the weights array to the totalWeight.

    5. Calculate weighted average:

    - Divide the weightedSum by the totalWeight to obtain the weighted average.

    6. Return the result:

    - The closure should return the calculated weighted average.
    - This process allows the closure to be reused with different students and weights, providing flexibility and encapsulation.

    7. Example Math:
```js
function createWeightedAverageCalculator(weightsArr) {
  // Your code here
}

const weightsArray = [0.3, 0.4, 0.3, 0.1, 0.7];

// Example Student
const student = {       
    firstName: 'Emma',
    lastName: 'Johnson',
    scores: [92, 78, 81, 76, 82],
    classes: ['Physics', 'History', 'Biology', 'Music', 'Psychology'] 
};

// Example Output
const calculateWeightedAverage = createWeightedAverageCalculator(weightArray);
const weightedAverage = calculateWeightedAverage(student);
console.log(weightedAverage); 
    Weighted sum: (92 * 0.3) + (78 * 0.4) + (81 * 0.3) + (76 * 0.1) + (82 * 0.7) = 148.1
    Total weight: 0.3 + 0.4 + 0.3 + 0.1 + 0.7 = 1.8
    Weighted average = Weighted sum / Total weight = 148.1 / 1.8 = 82.27 or 82.28
```



6. **Modify Scores:**
    - Implement a function to modify the scores of all students by applying a given modifier function.
    - Use the map array method.

7. **Highest Scoring Student:**
    - Implement a function to find the student with the highest average score.
    - Use the reduce array method.

8. **Sort Students by Average Score:**
    - Implement a function to sort the students based on their average scores in decending order.
    - Use the sort array method.

9. **Group Students by Score Range:**
    - Implement a function to group students into different arrays based on their average scores.
    - Use the reduce array method.

10. **Find Top N Students:**
    - Implement a function to find the top N students based on their average scores.
    - Use any array methods as needed.
