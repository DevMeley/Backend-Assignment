// Array

const students = [
    {
        Name: 'Abisola',
        Age: 18,
        Grade: 'Ten'
    },
    {
        Name: 'Monsurat',
        Age: 18,
        Grade: 'Nine'
    },
    {
        Name: 'Ayantola',
        Age: 17,
        Grade: 'Nine'
    },
    {
        Name: 'Mele',
        Age: 18,
        Grade: 'Ten'
    }
]



const filterByGrade = (students, Grade) => {
    return students.filter(student => student.Grade === Grade)
}

console.log(filterByGrade(students, "Nine"))

const averageAge = () =>{
    const totalAge = students.reduce((sum, student) => sum + student.Age, 0);
    return totalAge / students.length;
}

console.log(averageAge())