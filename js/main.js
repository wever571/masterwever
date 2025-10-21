fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    // Basic Info
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;

    // Skills Section
    const skillsContainer = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');

      skillDiv.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: ${skill.level}%;"></div>
        </div>
      `;

      skillsContainer.appendChild(skillDiv);
    });

    // Animate skill bars
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('style').match(/\d+/)[0] + '%';
      });
    }, 300);

    // Hobbies Section
    const hobbiesList = document.getElementById('hobbies-list');
    data.hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby.name;
      hobbiesList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading data:', error));