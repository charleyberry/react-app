import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} exact /> 
          <Route path="/about" Component={About} />
          <Route path="/shop" Component={Shop} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
