


function Techstack() {
return (
    <div className="flex items-center justify-around mt-10 bg-black rounded-xl border-white border-3 p-2">
    {arr.map((item, index) => <div className="p-2">
        <img key={index} src={item} className="w-25 h-25 object-cover  bg-black" alt="Tech Stack Logo"></img>
    </div>

    )}
    </div>
)

}

var arr = [
    'https://img.icons8.com/?size=100&id=w4RSxcrpwrzy&format=png&color=FFFFFF',
    'https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FFFFFF',
    'https://img.icons8.com/?size=100&id=Y9VdL7V5XPIc&format=png&color=FFFFFF',
    'https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=FFFFFF',
    
]
export default Techstack;