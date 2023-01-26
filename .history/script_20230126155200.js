const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const cardContainer = document.getElementById("card-container");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("ayah1996");

async function getUser(username) {
  const notFound = `<h4>Not Found !</h4>`;
  const response = await fetch(APIURL + username);
  const data = await response.json();
  console.log("OUTPUT ~ file: script.js:13 ~ getUser ~ data", data);
  if (data != null) {
    createUserCard(data);
    getRepos(username);
  } else {
    cardContainer.innerHTML = notFound;
  }
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
      <h2>${user.name} <br /><span> ${user.bio} </span></h2>
      <div class="data">
        <h3>${user.followers}<br /><span>Followers</span></h3>
        <h3>${user.following}<br /><span>Following</span></h3>
        <h3>${user.public_repos}<br /><span>Repos</span></h3>
      </div>
      <div id="repos"></div>
    </div>
  </div>
</div>`;
  cardContainer.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repo.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;

      reposElement.appendChild(repoEl);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
