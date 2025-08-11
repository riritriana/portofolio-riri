import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="profil">
          <h1>Riri Triana</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/sertificate">Sertificate</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
