//script.js for card.js

//generate elements
const name = document.createElement("h2");
const desc = document.createElement("p");
const avatar = document.createElement("img");

//populate content & styles
name.textContent = "Mary Therese Guevarra";
desc.textContent = "BSIS2 student at La Verdad Christian College.";
avatar.src = "assets/images/therese.png";
avatar.alt = "Mary Therese Guevarra";

//append profile card
const profileContainer = document.getElementById("profile-container");
profileContainer.appendChild(name);
profileContainer.appendChild(desc);
profileContainer.appendChild(avatar);