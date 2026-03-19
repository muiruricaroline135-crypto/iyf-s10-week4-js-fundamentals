let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 }
];

function showGrades() {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + " : " + students[i].grade);
    }
}

function averageGrade() {
    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }

    let average = total / students.length;
    console.log("Average Grade: " + average);
}

showGrades();
averageGrade();
