import React from 'react';

export default function Tech() {
  const skills = {
    frontend: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "TypeScript", icon: "" },
      { name: "React.js", icon: "fab fa-react" },
      { name: "Next.js", icon: "" },
      { name: "Tailwind CSS", icon: "" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Vite", icon: "" },
    ],
    backend: [
      { name: "Java (SpringBoot)", icon: "fab fa-java" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-server" },
      { name: "Nest.js", icon: "" },
      { name: "PHP (Laravel)", icon: "fab fa-php" },
      { name: "C", icon: "" },
    ],
    database: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "SQL Server", icon: "fas fa-database" },
      { name: "MariaDB", icon: "fas fa-database" },
      { name: "ORM Concept", icon: "fas fa-project-diagram" },
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Postman", icon: "" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Vercel", icon: "" },
      { name: "VS Code", icon: "" },
      { name: "Dbeaver & SQLyog", icon: "fas fa-table" },
      { name: "Figma (Slicing)", icon: "fab fa-figma" },
    ]
  };

  const renderSkillCategory = (title, skillList) => (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill.icon && <i className={`${skill.icon}`}></i>}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="tech-container" id="tech">
      <div className="tech-content">
        <h1>Skills & Expertise</h1>
        <div className="skills-wrapper">
            {renderSkillCategory("Front End Skills", skills.frontend)}
            {renderSkillCategory("Back End Skills", skills.backend)}
            {renderSkillCategory("Database & ORM", skills.database)}
            {renderSkillCategory("Software, Tools & DevOps", skills.tools)}
        </div>
      </div>
    </section>
  );
}