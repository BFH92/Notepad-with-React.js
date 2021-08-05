import React from 'react'
import Showdown from 'showdown'
import './NoteDisplay.css'

const converter = new Showdown.Converter();
const NoteDisplay = (props) => {
  
  let content = converter.makeHtml(props.content)
  let title = converter.makeHtml(props.title)
  
  function createMarkup(text) {
    return {__html: text};
  }
  return(
      <div className="display">
        <h3 dangerouslySetInnerHTML={createMarkup(title)}></h3>
        <p dangerouslySetInnerHTML={createMarkup(content)}></p>
      </div>
  )
}

export default NoteDisplay