import React from "react";
import SearchBar from "./SearchBar";
// import ListOfNames from "./ListOfNames";
import './App.css';

function App( props )
{
  const Data = props.Data;
    const listOfNames = Data.map( ( list ) =>
      <li key={list.id} className={list.sex}>{list.name}</li>
    );
    
  return (
    <div className="App">
      <SearchBar />
      <ul>{listOfNames}</ul>   
    </div>
  );
}
  

export default App;
