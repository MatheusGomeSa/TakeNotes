import React, { useState } from 'react';
import "./App.css"
import Notes from './components/Notes.js';
import NewNote from './components/NewNote.js';

const App = () => {

  const [ID, setId]= useState(0);
    class Note {
      constructor(title,text,id){
        this.id = id;
        this.title = title; 
        this.text = text;}
      }
      const getNote = () => { 
        let cont = 0;
        let l = [];
        let o;
        for(let i=0;localStorage.getItem('title'+i)!=null;i++){
          o = new Note(localStorage.getItem('title'+i),localStorage.getItem('text'+i),i);
          l.push(o);
          cont++;
        }
        setId(cont);
        return l;
      }
      const [ListPostit,SetListPostit] = useState (getNote);
      const addNote = () =>{
        setId(ID+1);
        const list = [...ListPostit, new Note("Title","Write Here",ID)]
        SetListPostit(list)
        localStorage.setItem('title'+ID,"Title");
        localStorage.setItem ('text'+ID,"Write Here")
      }
    return (
      <div className='container'>
        <button onClick={addNote}>Click</button>
        <NewNote Onclick={addNote} />
        <Notes PostIt={ListPostit}/>
      </div>
    );

}

export default App;
