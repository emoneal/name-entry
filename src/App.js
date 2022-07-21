import React from 'react'
import './App.css';

function App() {

  const [textEntry, setTextEntry] = React.useState("Start typing to enter text")

  function handleTextEntry(event) {
    setTextEntry(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="textDisplay">{textEntry}</h1>

        <input
          type="text"
          placeholder="nameEntry"
          onChange={handleTextEntry}
          />
      </header>
    </div>
  );
}

export default App;
