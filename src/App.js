
import { useState } from 'react';
import './App.css';

function App() {

  const [Text, setText] = useState("")

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(Text);
    speechSynthesis.speak(utterance);
  }


  return (
    <div className='container'>
      <h1 >Text to Speak</h1>
      <div className='container-1'>
      <input
        id="inputbox"
        type="text"
        placeholder='  text'
        value={Text}
        onChange={(e) => setText(e.target.value)} 
      ></input> <br></br>

    <button onClick={speak} >Speak</button>

    </div>     
    </div>
  );

}

export default App;
