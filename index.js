import { fetchUsers } from "./fetch.js";
const newcontainer = document.getElementById("newcontainer")
const container = document.getElementById("getusers");
const container2 = document.getElementById("over10");
const container3 = document.getElementById("reset");



function responseCard(data) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
        <h1 class="one">${data.firstName} ${data.lastName}</h1>
        <p class="two">Email: ${data.email}</p>
        <p class = "three">Company: ${data.companyName}</p>
        <p class= "four">Years Employed: ${data.yearsEmployed}</p>
    `;
    newcontainer.appendChild(card);
}

container.addEventListener("click", async () => {
    const users = await fetchUsers();
    newcontainer.innerHTML = "";
    users.forEach(responseCard);
});

container2.addEventListener("click", async () => {
    const users = await fetchUsers();
    newcontainer.innerHTML = "";
    users.filter(user => user.yearsEmployed < 10).forEach(responseCard);
});

container3.addEventListener("click", () => {
    newcontainer.innerHTML = "";
});
