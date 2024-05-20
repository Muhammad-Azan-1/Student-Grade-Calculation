// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
let students = [
    {
        name: "Azan",
        grades: [90, 80, 70, 85, 65,]
    },
    {
        name: "Anus",
        grades: [80, 60, 71, 75, 68,]
    },
    {
        name: "Mohammad",
        grades: [71, 32, 58, 33, 60,]
    }
];
for (let i = 0; i < students.length; i++) {
    function calculateAverageGrade(grades, student) {
        let total = students[i].grades.reduce((previous, current) => previous + current);
        let average = total / students[i].grades.length;
        console.log(`Name of the Student ${students[i].name} and his avaerage grade is ${average}`);
    }
    calculateAverageGrade(students[i].grades, students[i]);
}
export {};
