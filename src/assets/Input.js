import { useState } from "react";

const InputPart = (props)=>{
    let[inputVal,setInputVal] = useState('0')
    let[btnInput,setBtnInput]=useState(inputVal);
    props.demoProp(btnInput);
    return(
        <form className="flex justify-center items-center gap-4">
            <label className="text-blue-900 font-bold">Paragraphs : </label>
            <input value={inputVal} className="w-12 rounded-sm" type="number" step={'1'} min={'0'} onChange={(e)=>{setInputVal(e.target.value)}} ></input>
            <button value={"Generate"} type="submit" className="bg-amber-600 px-2 py-1 rounded-md active:scale-[0.97] hover:shadow-lg hover:bg-amber-700" onClick={(e)=>{e.preventDefault();
            setBtnInput(inputVal);}}>Generate</button>
        </form>
    )
};

export default InputPart;