const githubUsername = "wever571";

fetch('https://api.github.com/users/${githubwever571}/repos')
.then(response => response.json())
.then(repos => {
  const repolist = document.getElementById('repo-list');
  repoList.innerHTML = "";

  if (repos.length === 0) {
    repoList.innerHTML = "<li>No repositories found.</ul>";
    return;
  }

    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    repos.slice(0, 6).forEach(repo => {
      const li = document.createElemant('li');
      li.innerHTML = 
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p style="font-size: 12px; color: gray;">
             ${repo.language || "Unknown"} | ${repo.stargazers_count}
        </p>
      ';
      repoList.appendChild(li);
  });
});
.catch(error => {
  console.error("Error fetching GitHub repos:', error);
  document.getElementById("repo-list").innerHTML = "<li>Failed to load repositories.</li>;
});          



