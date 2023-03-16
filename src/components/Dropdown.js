import { useState,useEffect,useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, selection,onSelect}){
    const [isOpen,setIsOpen] = useState(false)
    const divEl = useRef()
    useEffect(()=>{
        const handler = (event) =>{
            console.log(event.target)
            if (!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click',handler,true)
        return () => {
            document.removeEventListener('click',handler);
        }
    },[])
   
    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (optionSelected) => {
        setIsOpen(!isOpen)
        onSelect(optionSelected)
    }
    const renederedOptions = options.map((option)=>{
        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key = {option.id}>{option.label}</div>
        )
    })
    return (
    <div ref = {divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-poitner border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{selection?.label || 'Select...'}
        <GoChevronDown/>
        </Panel>
        {isOpen && <Panel className="absolute top-full border rounded p-3 shadow bg-white w-full">{renederedOptions}</Panel>}
    </div>
    
    );
}

export default Dropdown