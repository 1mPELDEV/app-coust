import { BiHome } from 'react-icons/bi';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import NewProjects from './components/pages/NewProjects';


//layout
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Container customClass="min_height" />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="company" element={<Company />} />
        <Route path="Projects" element={<Projects />} /> 
        <Route path="NewProjects" element={<NewProjects />} />
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
