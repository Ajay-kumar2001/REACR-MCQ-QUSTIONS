import "./nav.css"
import { Link } from "react-router-dom"
function Nav(){
    return(<div className="nav">
         <Link to="/" >Home</Link>
         <Link to="/AboutUS">AboutUS</Link>
         <Link to="/ContactUs" > ContactUs</Link>
    </div>)
}
export default Nav