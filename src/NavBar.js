import './App.css';
import Home from './Home';
import AboutUS from './AboutUS';
import ContactUs from './ContactUs';
import { BrowserRouter,Routes , Route} from "react-router-dom"
import Nav from './Nav';
function NavBar() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>    
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS'  element={<AboutUS/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    

    </BrowserRouter>
    
  );
}
export default NavBar