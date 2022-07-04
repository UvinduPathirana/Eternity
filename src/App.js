import './App.css';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import Navigation from './components/navigation';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div class="app-main">
      <Navigation />  
        <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
          </Routes>
          </div>
    </div>
  );
}

export default App;
