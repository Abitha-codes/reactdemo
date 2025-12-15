function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++
    l++
    console.log("Let"+l)
  }
  return(<>
      <h1>Variable : Global : {v}</h1>
      <h1>Does not work let and const : because local</h1>
  </>)
}
export default App

// function App()
// {
//   let myfun=(a,b,c)=>{
//     var total=a+b+c
//     document.getElementById("res").innerHTML=`<h2>Total : ${total}</h2>`
//   }
//   return(<>
//   <h2>Arrow function without parameter</h2>
//   <h3>Note : onClick C must be caps <br></br>Don't use double quotes</h3>
//   <h3>Note : in calling function don't use parenthesis when without passing args</h3>
//   <button onClick={()=>myfun(10,20,30)}>Click</button>
//   <div id="res"></div>
//   </>)
// }
// export default App

// function App()
// {
//   let myfun=()=>{
//     document.getElementById("res").innerHTML="Congrats you clicked the button"
//   }
//   return(<>
//   <h2>Arrow function without parameter</h2>
//   <h3>Note : onClick C must be caps <br></br>Don't use double quotes</h3>
//   <h3>Note : in calling function don't use parenthesis when without passing args</h3>
//   <button onClick={myfun}>Click</button>
//   <div id="res"></div>
//   </>)
// }
// export default App

// import myimg from './images/Micky.jpg'
// function App()
// {
//   return(<>
//   <center>
//     <h2>Image Demo using path as expression</h2>
//     <img src={myimg} width="50%" height={"auto"} alt="path is wrong"></img>
//     </center>
//   </>)
// }
// export default App

// function App()
// {
//   var a=100
//   var b=200
//   var c=300
//   return(<>
//   <h2>Biggeset Among 2 no's using conditional or ternaray operator</h2>
//   <h2>Biggeset Number a or b : {a>b?a:b}</h2>
//   <h2>Biggeset Number a or b or c : {(a>b && a>c) ?a:(b>c?b:c)}</h2>
//   </>)
// }
// export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
