import Contact from "./Contact";
import Project from "./Project";
import Sertificate from "./Sertificate";
import Tech from "./Tech";

export default function Home() {
  return (
    <>
        <section className="home-container" id="home">
      <div className="home-content">
        <img src="me2.jpg" alt="" />
        <h1> Riri Triana</h1>
        <h3>FullStack Develover</h3>
        <p>
          I am a Bachelor of Accounting graduate from Universitas Nasional Pasim
          Bandung with an interest and expertise in web development. During my
          studies, I actively participated in various programming training
          courses and completed several web projects as part of exams and
          training assignments. I possess skills in HTML, CSS, JavaScript, and
          frameworks such as React and Node.js, as well as mastery of back-end
          development using Java and Spring Boot. My understanding of accounting
          information systems enables me to develop efficient web applications
          tailored to business needs. With this combination of accounting
          background and technical expertise, I am ready to contribute as a web
          developer to your company, providing innovative, data-driven solutions
          to various business challenges.{" "}
        </p>
      </div>
     
    </section>
    <Tech/>
 <Project/>
 <Sertificate/>
 <Contact/>
    </>
  );
}
