import React , {useState,useEffect, Children} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const[number,setNumber] = useState(0);
 const updateNumber = (e) => {
  let num = e.target.value && parseInt(e.target.value, 10) > 0 ? parseInt(e.target.value,10) : 0;
  setNumber(num);
 } 
  return (
    <div id="main">
      <ChildComponent child={number}/> 
       <input id='input' onChange={updateNumber} />
    
      <p id='output'>{number * number}</p>
    </div>
  )
}


export default App;
