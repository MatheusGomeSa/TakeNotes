import React from 'react';
import './Postit.css'

const Postit = ({props}) =>{
    console.log(props);
    return(<div className='note'>
        <input className='title' value={props.Name} type='text' />
        <textarea className='text' charswidth='40' cols='15'>{props.text}</textarea>
    </div>);

}
export default Postit