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