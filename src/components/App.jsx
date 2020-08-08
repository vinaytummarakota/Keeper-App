import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes((prevNotes)=>{
      return [...prevNotes, note];
    })
  }

  function deleteNote(idx){
    setNotes((prevNotes)=>{
      return (
        prevNotes.filter((prevNote, index)=>{
          return idx!==index;
        })
      )
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote}/>
      {notes.map((note, index)=>{
        return (
          <Note
            key = {uuid()}
            id = {index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
