export default function App() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <div className="profil">
            <h1>Riri Triana</h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tech">Tech</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#about">Sertificate</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home-container" id="home">
        <div className="home-content">
          <img src="me.jpg" alt="" />
          <h1> Riri Triana</h1>
          <h3>FullStack Develover</h3>
          <p>
            I am a Bachelor of Accounting graduate from Universitas Nasional
            Pasim Bandung with an interest and expertise in web development.
            During my studies, I actively participated in various programming
            training courses and completed several web projects as part of exams
            and training assignments. I possess skills in HTML, CSS, JavaScript,
            and frameworks such as React and Node.js, as well as mastery of
            back-end development using Java and Spring Boot. My understanding of
            accounting information systems enables me to develop efficient web
            applications tailored to business needs. With this combination of
            accounting background and technical expertise, I am ready to
            contribute as a web developer to your company, providing innovative,
            data-driven solutions to various business challenges.{" "}
          </p>
        </div>
      </section>

      <section className="tech-container" id="tech">
        <div className="tech-content">
          <h1>Technologies I Use</h1>
          <div className="tech-icons">
            <div className="tech-item">
              <i className="fab fa-html5"></i>
              <p>HTML</p>
            </div>
            <div className="tech-item">
              <i className="fab fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="tech-item">
              <i className="fab fa-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="tech-item">
              <i className="fab fa-react"></i>
              <p>React</p>
            </div>
            <div className="tech-item">
              <i className="fab fa-node-js"></i>
              <p>Node.js</p>
            </div>
            <div className="tech-item">
              <i className="fas fa-server"></i>
              <p>Express</p>
            </div>
            <div className="tech-item">
              <img src="postgresql.svg" alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </div>
            <div className="tech-item">
              <img src="mysql.svg" alt="MySQL" />
              <p>MySQL/MariaDB</p>
            </div>
            <div className="tech-item">
              <i className="fab fa-java"></i>
              <p>Java</p>
            </div>
            <div className="tech-item">
              <img src="springboot.svg" alt="Spring Boot" />
              <p>Spring Boot</p>
            </div>
            <div className="tech-item">
              <img src="c.svg" alt="C Language" />
              <p>C</p>
            </div>
            <div className="tech-item">
              <img src="tailwindcss.svg" alt="Tailwind CSS" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </section>
      <section className="project-container" id="project">
        <div className="project-content">
          <h1>My Projects</h1>
          <div className="project-list">
            <div className="project-item">
              <img src="c.png" alt="Project 1" />
              <div className="project-info">
                <h2>Beauty Salon</h2>
                <p>
This project is made with several features, namely Login, Registration, Salon Customer Administration, and Salon Service.                </p>
                <div className="list-use">
                  <span>C</span>
                  <span>Dekstop</span>
                </div>
                <a
                  href="https://github.com/riritriana/golden-sands-resort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >                 
                  Open Link
                </a>
              </div>
            </div>
            <div className="project-item">
              <img src="umis.png" alt="Project 1" />
              <div className="project-info">
                <h2>University Management Informasi System</h2>
                <p>
This project is created with several features, namely Login, Managing Information Systems for University Management (Admin).                </p>
                <div className="list-use">
                  <span>React.js</span>
                  <span>Tailwind</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                </div>
                <a
                  href="https://github.com/riritriana/university-manajement-information-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Open Link
                </a>
              </div>
            </div>
            <div className="project-item">
              <img src="html.png" alt="Project 1" />
              <div className="project-info">
                <h2>Yummy Yums Corner</h2>
                <p>
This project is designed with several features: Searching for International Recipes by Ingredients, Viewing Recipes, and Watching Cooking Tutorials.      </p>
                <div className="list-use">
                  <span>HTML</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>
                <a
                  href="https://github.com/riritriana/university-manajement-information-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Open Link
                </a>
              </div>
            </div>
            <div className="project-item">
              <img src="html.png" alt="Project 1" />
              <div className="project-info">
                <h2>Payroll and PPH21 </h2>
                <p>
This project was created with several features, namely Login, Calculating PPH21 tax, Managing company employee administration and payroll.                </p>
                <div className="list-use">
                  <span>Java</span>
                  <span>Springboot</span>
                  <span>HTML</span>
                  <span>CSSS</span>
                  <span>Thymeleaf</span>
                  <span>MariaDB</span>
                </div>
                <a
                  href="https://github.com/riritriana/payroll-and-pph21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                 Open Link
                </a>
              </div>
            </div>
            <div className="project-item">
              <img src="html.png" alt="Project 1" />
              <div className="project-info">
                <h2>Golden Sands Resort</h2>
                <p>
This project has 2 Roles (Admin User) created with several features, namely Login, Booking Hotel Rooms (User), Managing hotel administration (Admin).                </p>
                <div className="list-use">
                  <span>React.js</span>
                  <span>Tailwind</span>
                  <span>Java</span>
                  <span>Springboot</span>
                  <span>Mariadb</span>
                </div>
                <a
                  href="https://github.com/riritriana/golden-sands-resort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Open Link
                </a>
              </div>
            </div>
            <div className="project-item">
              <img src="html.png" alt="Project 1" />
              <div className="project-info">
                <h2>Learn English</h2>
                <p>
This project has 2 roles (User and Admin) created with several features, namely Login, Registration, Creating English Quizzes (Admin), Reading Vocabulary, and Viewing English Quizzes (User).                </p>
                <div className="list-use">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Express</span>
                  <span>Node.js</span>
                  <span>Postgresql</span>
                </div>
                <a
                  href="https://github.com/riritriana/university-manajement-information-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Open Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-container" id="about">
        <div className="about-content">
          <h1>Training certificate</h1>
          <div className="certificate-grid">
            <div className="certificate-item">
              <img src="s_htmll.jpg" alt="HTML Certificate" />
              <p>Web Programming (HTML, CSS, JavaScript)</p>
            </div>
            <div className="certificate-item">
              <img src="s11.jpg" alt="JS Certificate" />
              <p>Data Sctructure Programming (C programming)</p>
            </div>

            <div className="certificate-item">
              <img src="cc.jpg" alt="JS Certificate" />
              <p>Logic Algoritma Programming (C programming)</p>
            </div>

            <div className="certificate-item">
              <img src="databasee.jpg" alt="CSS Certificate" />
              <p>Database Programming (mySql) </p>
            </div>

            <div className="certificate-item">
              <img src="reactjs.jpg" alt="CSS Certificate" />
              <p>Basic React </p>
            </div>

            <div className="certificate-item">
              <img src="githubb.jpg" alt="CSS Certificate" />
              <p>Git Hub Training </p>
            </div>

            <div className="certificate-item">
              <img src="githubb.jpg" alt="CSS Certificate" />
              <p>Fundamental Back-End(Node.js Programming Language) </p>
            </div>

            <div className="certificate-item">
              <img src="java-lann.jpg" alt="CSS Certificate" />
              <p>Back-End Programming (Java Language)</p>
            </div>
            <div className="certificate-item">
              <img src="javaa.jpg" alt="CSS Certificate" />
              <p>Fundamental Back-End Programming (Java Language)</p>
            </div>
            <div className="certificate-item">
              <img src="react-java.jpg" alt="CSS Certificate" />
              <p>React Java Programming </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-container" id="contact">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <div className="contact-icons">
            <a
              href="mailto:riritriana21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/riritriana"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/riri-trianaa"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer-container">
        <div className="footer-content">
          <p>© 2025 Riri Triana. All Rights Reserved.</p>
          <p>
            Contact me via <a href="mailto:riritriana21@gmail.com">email</a> or
            phone.
          </p>
          <span className="phone">📞 +62 572 3764 893</span>
        </div>
      </footer>
    </div>
  );
}
