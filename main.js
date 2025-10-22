const data = {
  name: "Glory Mae Peralta",
  description: "IT student passionate about web design and front-end development.",
  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 }
  ],
  hobbies: ["Dancing", "Reading", "Watching Movies"]
};
     
    document.getElementById('name').textContent = data.name;
    document.getElementById('description').textContent = data.description;

    const skillsContainer = document.getElementById('skills-list');
    
    data.skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');

      skillDiv.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
          <div class="skill-fill" data-level="${skill.level}"></div>
        </div>
        <div class="skill-percent">$(skill.level)%</div>
      `;
      
      skillsContainer.appendChild(skillDiv);
    });

    setTimeout(() => {
      document.querySelectorAll(".skill-fill").forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level + "%";
      });
    }, 300);

    const hobbiesList = document.getElementById('hobbies-list');
    data.hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });


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


