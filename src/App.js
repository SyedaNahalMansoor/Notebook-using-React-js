import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [note , setNote] = useState([
    { value : "Your are very Cute!" , disabled : true} ,
    { value : "May Allah Bless You!" , disabled : true}
  ])
  let [value , setValue] = useState("")

  let addNote = () => {
    if (value.trim() === "") return;
    setNote (
      [...note , {value , disabled : true}]
    )
    setValue("")
  }

  return (
    <div className="App">
      <h1>Note Book</h1>
      <input type='text' placeholder='Type your note here......' onChange={(e) => setValue(e.target.value)} value={value}/>
      <button onClick={addNote}>Add Note</button>
      <button onClick={() => setNote([])}>Delete all notes </button> <br/>
      <ul>
        {
          note.map ((v,i) => <li key = {i}>
          <input defaultValue={v.value} disabled = {v.disabled}/>  
          <button onClick={() => {
            let allNote = [...note]
            allNote.splice(i , 1)
            setNote(allNote)
          }}>Delete</button>
          {
            v.disabled === true ? 
            <button onClick={() => {
            let allNote = [...note]
            allNote.splice(i , 1 , {...v , disabled : false})
            setNote(allNote)
            }}>Edit</button> : 

            <button onClick={() => {
              let allNote = [...note]
              allNote.splice(i , 1 , {...v , disabled : true})
              setNote(allNote)
            }}>Update</button>
          }
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;

