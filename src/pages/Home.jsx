import Contact from "./Contact";
import Project from "./Project";
import Sertificate from "./Sertificate";
import Tech from "./Tech";

export default function Home() {
  return (
    <>
      <section className="home-container" id="home">
        <div className="home-content">
          {/* Foto Profil */}
          <img src="me2.jpg" alt="Riri Triana Profile" />
          
          <h1>Hi, I'm Riri Triana</h1>
          
          <h3>Software Developer</h3>
          
          <p>
          I am a Software Developer with a unique background in Accounting. 
          This combination allows me to build applications that are not only technically robust but also aligned with business logic and financial efficiency. Experienced in full-stack development using React, Node.js, and Java Spring Boot, I am passionate about creating digital solutions that solve real-world problems. I am eager to bring my analytical skills and technical expertise to a dynamic development team.          
          </p>
        </div>
      </section>
      <Tech />
      <Project />
      <Sertificate />
      <Contact />
    </>
  );
}