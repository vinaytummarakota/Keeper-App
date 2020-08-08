import React,{useState} from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  const [showTitle, setShowTitle] = useState(false);

  function changeNote(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prevNote)=>{
      return {
        ...prevNote,
        [name]:value
      }
    });
  }

  function addTitle(){
    setShowTitle(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={(event)=>{
        props.onSubmit(note);
        setNote({title: "", content: ""});
        setShowTitle(false);
        event.preventDefault();
      }}>
        <input name="title" placeholder="Title" onChange={changeNote} value={note.title} style={{display: showTitle ? "inline" : "none"}}/>
        <textarea name="content" placeholder="Take a note..." rows={showTitle ? "3" : "1"} onChange={changeNote} value={note.content} onClick={addTitle}/>
        <Zoom in={showTitle ? true : false}>
          <Fab type="submit">
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
