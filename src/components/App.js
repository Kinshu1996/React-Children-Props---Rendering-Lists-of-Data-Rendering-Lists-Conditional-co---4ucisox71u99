import React , {useState,useEffect, Children} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 function updateNumber(e) {
  const val = document.getElementById('input').value;
  let vrbl = 0;
  if(val != ''){
    vrbl = parseInt(val)*parseInt(val);
  }
  document.getElementById('output').textContent=vrbl;
 } 
  return (
    <div id="main">
      <ChildComponent > 
       <input id='input' onChange={updateNumber} />
       </ChildComponent>
    
      <p id='output'>{'0'}</p>
    </div>
  )
}


export default App;
