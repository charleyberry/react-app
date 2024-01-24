import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Contact from './Contact';

function Home() {
  return (
    <div className="Home">
      <h1>Home page</h1>
      <Link to='Contact'>a link</Link>
    </div>
  );
}

export default Home;
