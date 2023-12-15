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