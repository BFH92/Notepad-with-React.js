import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Main from "./components/Main";
import Aside from "./components/Aside";
import uuid from "uuid";

const App = () => {

  const [notes, setNotes] = React.useState(localStorage.notes? JSON.parse(localStorage.notes):[]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  React.useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  const AddNote =()=> {
    const NewNote = {
      id: uuid(),
      title: "#New Title",
      content: "",
      date: new Date(Date.now()).toLocaleDateString('fr-FR'),
    };
    setNotes([NewNote, ...notes]);
  }
  
  const SelectNote =(id) =>{
      notes.map((note)=>{
      if (note.id === id ){
      setTitle(note.title)
      setContent(note.content)
      }
    }
    )
  }

  const DeleteNote = (id)=>{
    setNotes(notes.filter((note) => id !== note.id));
  }
  const saveInput = () => {

  
    const NewNote = {
      id: uuid(),
      title: title,
      content: content,
      date: new Date(Date.now()).toLocaleDateString('fr-FR'),
    };
    setNotes([NewNote, ...notes]);
    

  };
  const displayInput = (key, value) => {
    if (key === "title") {
      setTitle(value);
    } 
    if (key === "content") {
      setContent(value);
    }
  };


  

  return (
    <div className="container-all">
      <Aside notes={notes} AddNote={AddNote} SelectNote={SelectNote} DeleteNote={DeleteNote}/>
      <Main
        saveInput={saveInput}
        displayInput={displayInput}
        title={title}
        content={content}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
