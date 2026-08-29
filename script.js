/*
//script.js for card.js (first file name na nalagay)

//generate elements
const name = document.createElement("h2");
const desc = document.createElement("p");
const avatar = document.createElement("img");

//populate content & styles
name.textContent = "Mary Therese Guevarra";
name.className = "profile-name";

desc.textContent = "BSIS2 student at La Verdad Christian College.";
desc.className = "profile-bio";

avatar.src = "assets/images/therese.png";
avatar.alt = "Mary Therese Guevarra";
avatar.className = "profile-avatar";

//append profile card
const profileContainer = document.getElementById("profile-container");
profileContainer.classList.add("profile-card");
profileContainer.appendChild(name);
profileContainer.appendChild(desc);
profileContainer.appendChild(avatar);
*/

//script for student-registration-card, note: ang ginawa ko po instead na nameInput ang variable, studentName po nilagay ko

//generate elements
const welcomeMessage = document.createElement ("p");
const studentName = document.createElement ("input");
const studentCourse = document.createElement ("select");
const themeBtn = document.createElement ("button");
const registerBtn = document.createElement("button"); //para magkaroon ng functionality yung button
const registrationMessage = document.createElement ("p");
const studentForm = document.createElement ("form");

//populate content & styles
welcomeMessage.textContent = "Please enter your full name in this form.";
welcomeMessage.className = "welcome-message";

studentName.type = "text";
studentName.placeholder = "Enter your full name";
studentName.className = "student-input";

studentCourse.className = "course-input"; //suggested looping sa google
["BSIS", "BSAIS", "BSA", "BAB", "BSSW"].forEach((course) => {
  const option = document.createElement("option");
  option.value = course;
  option.textContent = course;
  studentCourse.appendChild(option);
});

themeBtn.type = "button";
themeBtn.textContent = "Change Theme";
themeBtn.className = "theme-toggle";

registerBtn.type = "submit";
registerBtn.textContent = "Register";
registerBtn.className = "btn btn-primary";

registrationMessage.className = "registration-result"
studentForm.className = "registration-form";

//form
studentForm.appendChild(studentName);
studentForm.appendChild(studentCourse);
studentForm.appendChild(registerBtn);
studentForm.appendChild(themeBtn);

//append registration card
const profileContainer = document.querySelector(".profile-container"); //para sa css
profileContainer.classList.add("profile-card"); 
profileContainer.appendChild(welcomeMessage);
profileContainer.appendChild(studentForm);
profileContainer.appendChild(registrationMessage);

//part 1
studentName.addEventListener("input", () => {
  const value = studentName.value.trim();
  if (value) {
    welcomeMessage.textContent = `Welcome, ${value}!`;
  } else {
    welcomeMessage.textContent = "Please enter your name to begin registration.";
  }
});

//part 2
studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = studentName.value.trim();
  const course = studentCourse.value;

  if (!name) {
    registrationMessage.textContent = "Please enter your name before registering.";
  } else {
    registrationMessage.textContent = `${name} has been registered for ${course}.`;
  }
  registrationMessage.classList.add("show");
});

//part 3
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

