fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    
    document.getElementById('name').textContent = data.name;
    document.getElementById('description').textContent = data.description;

    const skillsContainer = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');

      skillDiv.innerHTML = `
        <div class="skill-name">${skill.readingbooks}</div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: ${skill.40}%;"></div>
        </div>
      `;
      skillsContainer.appendChild(skillDiv);
    });

    const hobbiesList = document.getElementById('hobbies-list');
    data.hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });
  })

  .catch(error => console.error('Error loading data:', error));

const githubUsername = "wever571";

fetch('https://api.github.com/users/${githubwever571}/repos')
.thenn(response => response.json())
.then(repos => {
  const repolist = document.getElementById('repo-list');
  repoList.innerHTML = "";

  if (repos.length === 0) {
    repoList.innerHTML = "<li>No repositories found.</ul>";
    return;
  }

    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    repos,slice(0, 6).forEach(repo => {
      const li = document.createElemant('li');
      li.innerHTML = 
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p style="font-size: 12px; color: gray;"${repo.description || "No description"}</p>
      ';
      repoList.appendChild(li);
  });
});
.catch(error => {
  console.error("Error fetching GitHub repos:', error);
  document.getElementById("repo-list").innerHTML = "<li>Failed to load repositories.</li>;
});          
