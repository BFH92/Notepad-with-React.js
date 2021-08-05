import React from 'react'
import './MarkdownInput.css'
const MarkdownInput = ({displayInput, saveInput}) =>{

  return(
    <div id="markDown">
      <input className="margin" placeholder="Add a Title" type="text" id="title" onChange={(e) => displayInput("title", "#"+e.target.value)}/>
      <textarea  placeholder="Add a Content " type="text" id="content" onChange={(e) => displayInput("content", e.target.value)}/>
      
      <div className="margin">
      <button className="save-btn" onClick={saveInput}>
          Save
      </button>
      </div>
      
    </div>
  )
}
export default MarkdownInput