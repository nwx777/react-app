import React from 'react';
import './App.css';
import {Button} from "./components/ui/button/button";

function App() {
  let car="bmw "
  let mark="m8"
  let sum=(car:string,mark:string)=>{
    return car + mark

  }
  return (
      <div className="App">
        <Button sum={sum} car={car} mark={mark}/>
      </div>
  );
}

export default App;
