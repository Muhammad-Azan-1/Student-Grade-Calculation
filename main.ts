// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.

type Student = {

    name: string;
    grades: number[];

}

let students: Student[] =[

    {
        name: "Azan",
        grades: [90, 80, 70,85,65,]
    },
    {
        name: "Anus",
        grades: [80, 60, 71,75,68,]
    },
    {
        name: "Mohammad",
        grades: [71, 32, 58,33,60,]
    }
]



function calculateAverageGrade(grades: number[],){

   
    let total =  grades.reduce((previous, current) => previous + current,)
    
    let average = total / grades.length;

    return average;

}

for(let i = 0; i<students.length;i++){

let gradeAverage  = calculateAverageGrade(students[i].grades)

console.log(`Name of the Student ${students[i].name} and their  avaerage grade is ${gradeAverage}`)

}