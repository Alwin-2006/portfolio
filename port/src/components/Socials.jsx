import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';


function Socials() {
    return(
        <div className="flex justify-between h-full w-1/3 gap-4 mt-4">
            <a href = "https://github.com/Alwin-code" className=' rounded-b-full'><img src = {github} ></img></a>
            <a href = "https://www.linkedin.com/in/alwin-santhosh-3801312b9/" className=' bg-yellow- rounded-b-full '><img src ={linkedin} ></img></a>
        </div>
    ) 
}

export default Socials;