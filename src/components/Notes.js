import React from 'react';
import Postit from './Postit';
import './Notes.css'
const Notes = ( {PostIt} ) => {
    
    return(<div className ='takeNote'>
        {PostIt.map((props) => (<Postit props={props} />))}
        </div>);
};
export default Notes;