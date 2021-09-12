import React, { useState } from 'react';
import "./App.css"
import Notes from './components/Notes.js';
import NewNote from './components/NewNote.js';

const App = () => {
    const [postit,setpostit] = useState( [{Name:'here',text:'not here'},{Name:"New",text:'Write Here !!'},{Name:"New",text:'Write Here !!'}] )
    return (
      <div className='container'>
        <NewNote />
        <Notes PostIt={postit}/>
      </div>
    );

}

export default App;
