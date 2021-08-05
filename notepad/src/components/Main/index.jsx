import React from "react";
import MarkdownInput from "./MarkdownInput/MarkdownInput";
import NoteDisplay from "./NoteDisplay/NoteDisplay";

const Main = ({saveInput,displayInput, title, content}) => {
  return (
    <div className="main">   
        <NoteDisplay title={title} content={content}/>
        <MarkdownInput displayInput={displayInput} saveInput={saveInput}/>
    </div>
  );
};

export default Main;
