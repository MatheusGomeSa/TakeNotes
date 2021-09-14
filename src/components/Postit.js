import React, { useState } from 'react';
import './Postit.css'

const Postit = ({props}) =>{
    console.log(props.title)
    const [ Title,setTitle ] = useState(props.title);
    const [ Text,SetText ] = useState(props.text)


    const handleInputChange = (e,isATitle) =>{
        if(isATitle === true){
            setInterval(setTitle(e.target.value),2000);
            console.log(Title);
            props.title = Title;
            setInterval(localStorage.setItem('title'+props.id,Title),500);
        }else{
            console.log(e.target.value);
            setInterval(SetText(e.target.value),500);
            props.text = Text;
            setInterval(localStorage.setItem('text'+props.id,Text),500);
        }
        
    };
    return(<div className='note'>
        <input className='title' type='text' onChange={(e) => {handleInputChange(e,true)}} value={Title} />
        <textarea className='text' charswidth='40' cols='15' onChange={(e) => {handleInputChange(e,false)}}>{Text}</textarea>
    </div>);

}
export default Postit