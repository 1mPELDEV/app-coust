import { BiHome } from 'react-icons/bi';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/NewProject';
import Projects from './components/Projects.jsx';

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
        <Route path="newProject" element={<NewProject />} />
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
