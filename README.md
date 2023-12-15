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
    - Implement a function that returns a closure for calculating the weighted average.
    - The closure should take a weight array and compute the weighted average for a student.

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
