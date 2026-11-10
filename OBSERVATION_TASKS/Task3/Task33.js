// Student class
class Student {

    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }

}

// Function to create student profile
function createProfile() {

    // Get values from input fields
    let name = document.getElementById("name").value;
    let rollNumber = document.getElementById("roll").value;
    let department = document.getElementById("department").value;
    let cgpa = document.getElementById("cgpa").value;

    // Create Student object
    let student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );

    // Select profile div
    let profile = document.getElementById("profile");

    // Dynamically create HTML content
    profile.innerHTML = `
                <h2>Student Profile</h2>
                <p><b>Name:</b> ${student.name}</p>
                <p><b>Roll No:</b> ${student.rollNumber}</p>
                <p><b>Department:</b> ${student.department}</p>
                <p><b>CGPA:</b> ${student.cgpa}</p>
            `;
}
