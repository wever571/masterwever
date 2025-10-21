fetch('https://api.github.com/users/masterwever/repos')
  .then(response => response.json())
  .then(repos => {
    const repoList = document.getElementById('repos');
    repos.forEach(repo => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";
      li.appendChild(link);
      repoList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching GitHub data:', error));