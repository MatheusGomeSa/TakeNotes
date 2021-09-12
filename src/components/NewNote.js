import React, { useState } from "react";
import './NewNote.css'
const NewNote = () =>{
    const [newPostIt,SetnewPostIt] = useState()
    return(
        <div>
            <button className='button'>+</button>
        </div>
    )
}
export default NewNote;