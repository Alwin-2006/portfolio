import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';


function Socials() {
    return(
        <div className="flex justify-around items-center gap-10 overflow-hidden object-fill">
            <a href = "https://github.com/Alwin-code" className=' rounded-full object-fill overflow-hidden' target="_blank"><img src = {github} className="w-20 h-20 object-cover" ></img></a>
            <a href = "https://www.linkedin.com/in/alwin-santhosh-3801312b9/" className=' bg-white  object-fill rounded-2xl border-white border-4' target="_blank"><img src ={linkedin} className="w-20 h-20 object-cover"></img></a>
        </div>
    ) 
}

export default Socials;