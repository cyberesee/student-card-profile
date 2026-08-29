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

//script for student-registration-card

//generate elements
const welcomeMessage = document.createElement ("p");
const studentName = document.createElement ("input");
const studentCourse = document.createElement ("select");
const themeBtn = document.createElement ("button");
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

registrationMessage.className = "registration-result"
studentForm.className = "registration-form";

//append registration card
const profileContainer = document.querySelector(".profile-container"); //para sa css
profileContainer.classList.add("profile-card"); 
profileContainer.appendChild(welcomeMessage);
profileContainer.appendChild(studentForm);
profileContainer.appendChild(registrationMessage);


