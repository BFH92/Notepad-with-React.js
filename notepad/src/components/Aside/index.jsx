import React from "react";
import Showdown from 'showdown';
import './aside.css'

const converter = new Showdown.Converter();
const Aside = ({ notes, AddNote, SelectNote, DeleteNote }) => {
  let content="";
  let title= "";
  function createMarkup(text) {
    return {__html: text};
  }
  const SortedNotes = notes.sort((a,b) => b.date - a.date)
  return (
    <div className="aside">
      
      <div className="container">
        <button  className="add-btn center"onClick={()=>AddNote()} >Add note</button>
      </div>
    
      
      {SortedNotes.map((note, index) => {
          title = converter.makeHtml(note.title)
         content = converter.makeHtml(note.content)
          
        return (
      
        <div onClick={(e) => SelectNote(e.target.closest('div').id)} id={note.id} key={index} className="aside__note__content__preview"  >
          <p dangerouslySetInnerHTML={createMarkup(title)}></p>
          <p className="crop" dangerouslySetInnerHTML={createMarkup(content)}></p>
          <small>{note.date}</small>
          <button  className="delete-btn "onClick={(e)=>DeleteNote(e.target.closest('div').id)} >Delete</button>
        </div>
      
      )})}
    </div>
  );
};

export default Aside;
