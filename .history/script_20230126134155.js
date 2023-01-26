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
  const cardHTML = ``;
}
