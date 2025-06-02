import { Link } from "react-router";
import '../App.css';


function Navbar() {

    return(
        <div className="bg-black text-white px-150 text-3xl flex justify-around gap-10">
            <Link to="/" className=" font-bold hover:text-gray-400" >Home</Link>
            <Link to="/about" className="text-white font-bold hover:text-gray-400 ">About Me</Link>
            <Link to="/projects" className="text-white font-bold hover:text-gray-400 ">Projects</Link>
            <Link to="/experience" className="text-white font-bold hover:text-gray-400 ">Experience</Link>
        </div>
    )
}
export default Navbar;