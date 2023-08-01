const name = "Jaime";
const age = 30;
const city = "Madrid";
localStorage.setItem("name", name);
localStorage.setItem("age", age);
localStorage.setItem("city", city);


const student = {
    firstName: "joselito",
    lastname: "capo",
    age: "54",
    country: "wakanda",
    courses: ["opl", "stu", "rbd", "csl"]
}
localStorage.setItem("student", JSON.stringify(student));




function createForm (){
    const body = document.querySelector("body");
    const formulario = document.createElement("form");
    formulario.id = "form";
    formulario.innerHTML = `

    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required/>

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required/>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required/>

    <label for="country">Country:</label>
    <input type="text" id="country" name="country" required/>

    <label for="courses">Courses:</label>
    <input type="text" id="courses" name="courses" required/>

    <button type="submit">submit</button>
    `

    body.appendChild(formulario);
}
createForm();






function saveStudents (){
    const form = document.querySelector("form");
    const inputFirstName = document.querySelector("#firstName");
    const inputLastName = document.querySelector("#lastName");
    const inputAge = document.querySelector("#age");
    const inputCountry = document.querySelector("#country");
    const inputCourses = document.querySelector("#courses");

    

const arrayStudents = [];
arrayStudents.push(student);
localStorage.setItem("students", JSON.stringify(arrayStudents))

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const inputFirstNameValue = inputFirstName.value;
        const inputLastNameValue = inputLastName.value;
        const inputAgeValue = inputAge.value;
        const inputCountryValue = inputCountry.value;
        const inputCoursesValue = inputCourses.value;


        const newStudent = {
        firstNme: inputFirstNameValue || "empty",
        lastName: inputLastNameValue || "empty",
        age: inputAgeValue || "empty",
        country: inputCountryValue || "empty",
        courses: inputCoursesValue || "empty",
    };

        
        arrayStudents.push(newStudent);
        console.log(newStudent);
        console.log(arrayStudents);

        localStorage.setItem("students", JSON.stringify(arrayStudents));

    })
    
    
    
    console.log(arrayStudents);
}
saveStudents()