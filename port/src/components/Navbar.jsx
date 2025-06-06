import { Link } from "react-router-dom";
import '../App.css';


function Navbar() {

    return(
        <div className="bg-black text-white text-xl flex justify-around items-center w-full gap-5 md:text-4xl md:gap-15">
            <Link to="/" className=" font-bold hover:text-gray-400" >Home</Link>
            <Link to="/about" className="text-white font-bold hover:text-gray-400">About Me</Link>
            <Link to="/projects" className="text-white font-bold hover:text-gray-400 ">Projects</Link>
            <Link to="/experience" className="text-white font-bold hover:text-gray-400 ">Experience</Link>
        </div>
    )
}
export default Navbar;