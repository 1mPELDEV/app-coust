import { BiHome } from 'react-icons/bi';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/NewProject';
//layout
import Container from './components/layout/Container';

function App() {
 
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contato</Link>
      <Link to="/Company">Empresa</Link>
      <Link to="/NewProject">Novo Projeto</Link>
    </div>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Company" element={<Company />} />
        <Route path="NewProject" element={<NewProject />} />
      </Route>
    </Routes>
    <footer>footer</footer>
    </BrowserRouter>
  )
}

export default App
