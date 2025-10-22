const githubUsername = "wever571";

const repoList = document.getElementById("repo-list");

fetch('https://api.github.com/users/${wever571}/repos?sort=updated&per_page=10')
.then(response => response.json())
.then(data => {
  repoList.innerHTML = "";

  if (data.length === 0) {
    repoList.innerHTML = "<li>No repositories found.</ul>";
    return;
  }

   data.forEach(repo => {
     const li = document.createElement("li");
     li.innerHTML = <a href="${repo.html_url}" target="_blank">${repo.name}</a>;
      repoList.appendChild(li);
    });
});
.catch(error => {
  repoList.innerHTML = "<Li>Failed to load repositories.</li>;
  console.error("Error loading repos:", error);
});

