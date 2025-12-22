import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
  Rollno:21,
  StudentName:"Abitha",
  Mark:[88,98,76,99,98],
  Rank:3,
  Grade:"Outstanding",
  Location:"Vangal",
  MarritalStatus:"Single",
  Hobbies:{
    hob1:"Singing",
    hob2:"Dancing",
    hob3:"Reading Books"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
