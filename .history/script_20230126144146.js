const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("ayah1996");

async function getUser(username) {
  const response = await fetch(APIURL + username);
  const data = await response.json();

  createUserCard(data);
  getRepos(username);
}

async function getRepos(username) {
  const response = await fetch(APIURL + username + "/repos");
  const data = await response.json();

  addReposToCard(data);
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
  <div class="imgBox">
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
  </div>
  <div class="content">
    <div class="details">
      <h2>Ayah Ezzeddine <br /><span> Front-End Developer </span></h2>
      <div class="data">
        <h3>342<br /><span>Followers</span></h3>
        <h3>342<br /><span>Following</span></h3>
        <h3>100<br /><span>Repos</span></h3>
      </div>
    </div>
  </div>
</div>`;
}
