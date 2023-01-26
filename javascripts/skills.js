const skills = document.getElementById('skills');
skills.onload = fetch('/data/skills.json')
  .then(response => response.json())
  .then(jsonResponse => {
    jsonResponse.skillLineItems.forEach(skillLineItem => {
      createSkills(skillLineItem);
    });
  });

function createSkills(skillLineItem) {
  const skill_row = document.createElement('div');
  skill_row.classList.add('skills', 'row');

  skillLineItem.forEach(ele => {
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');

    const h2 = document.createElement('h2');
    h2.classList.add('heading', 'colour-off', 'bg-green');
    h2.innerText = `${ele.SkillType}`;

    const content_row = document.createElement('div');
    content_row.classList.add('content', 'row');

    ele.SkillNames.forEach(name => {
      const skill_name = document.createElement('div');
      skill_name.classList.add('skill');
      skill_name.innerHTML = ` ${name} `;
      content_row.appendChild(skill_name);
    });

    ribbon.appendChild(h2);
    ribbon.appendChild(content_row);

    skill_row.appendChild(ribbon);
  });

  skills.appendChild(skill_row);
}

// var skillData = {
//   "skillLineItems": [
//     [
//       {
//         "SkillType": "Programming Languages",
//         "SkillNames": ["Golang", "Ruby", "Java", "JavaScript", "Python"]
//       },
//       {
//         "SkillType": "Frameworks",
//         "SkillNames": ["Ruby on Rails", "Python Django", "Angular - 5", "ReactJs", "Android"]
//       }
//     ],
//     [
//       {
//         "SkillType": "Server-side Technologies",
//         "SkillNames": ["PostgreSQL", "RabbitMQ", "Redis", "MySQL", "SQLite"]
//       },
//       {
//         "SkillType": "Client-side Technologies",
//         "SkillNames": ["HTML", "CSS", "JQuery", "Bootstrap", "Semantic UI", "SCSS"]
//       }
//     ],
//     [
//       {
//         "SkillType": "Hosting",
//         "SkillNames": ["Amazon Web Services - AWS", "Google Cloud Platform - GCP", "Heroku"]
//       },
//       {
//         "SkillType": "Testing Frameworks",
//         "SkillNames": ["RSpec", "Mocha-Chai"]
//       }
//     ],
//     [
//       {
//         "SkillType": "Version Control Tools",
//         "SkillNames": ["Git"]
//       }
//     ]
//   ]
// }

// function local_createSkills() {
//   skillData.skillLineItems.forEach(skillLineItem => {
//     createSkills(skillLineItem);
//   });
// }

// skills.onload = local_createSkills();
