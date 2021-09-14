import React from "react";
import './NewNote.css'
const NewNote = ({ onClick }) =>{
     
    return(
        <div>
            <button className='button' Onclick={onClick}>+</button>
        </div>
    )
}
export default NewNote;