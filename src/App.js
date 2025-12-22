function App(props)
{
  var a=props.data.Rollno
  var b=props.data.StudentName
  var c=props.data.Mark
  var d=props.data.Rank
  var e=props.data.Hobbies
  
  return(<>
    <h3>Type of Rollno:{typeof(a)}</h3>
    <h3>Type of Sname:{typeof(b)}</h3>
    <h3>Type of mark:{typeof(c)}</h3>
    <h3>Type of Rank:{typeof(d)}</h3>
    <h3>{Array.isArray(c)?"It is a array":"It is a object json"}</h3>
    <h3>{Array.isArray(e)?"It is a array":"It is a object json"}</h3>
  </>)
}
export default App

// import parse from "html-react-parser"
// function App(props) {
//   var ans = "";
//   for (var s in props.data) {
//     ans = ans + `<li>${s} : ${props.data[s]}</li>`;
//     console.log(s);
//   }
//   return (
//     <>
//       {parse(`<ol> ${ans}</ol>`)}
//     </>
//   )
// }
// export default App

// import React from "react";
// import parse from "html-react-parser";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     var ans = ""
//     super(props)
//     for (var s in props.data)
//     {
//       ans = ans + `<li>${s}:${props.data[s]}</li>`;
//       console.log(s);
//     }
//       this.state={
//       res:`<ol type="I">${ans}</ol>`
// }
//   }
//   render(){
//     return(<>
//       <h1>Combine react state + props</h1>
//       {parse(this.state.res)}
//       <div id="res"></div>
//     </>)
//   }
// }
// export default App

// import React from "react";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       studentname: this.props.sname,
//       studentmark: this.props.mark
//     }
//   }
//   render()
//   {
//     return(<>
//       <h1>Combine react state + prpos</h1>
//       <h2>Student Name:{this.state.studentname}</h2>
//       <h2>Student Mark:{this.state.studentmark}
//       </h2>
//     </>)
//   }
// }
// export default App

// import React from "react";
// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state={
//       sno:22,
//       sname:"Abitha",
//       mark:[100,55,77,99,77]}
//   }
//   show=()=>{
//     this.setState({sname:"Abitha. S"})
//     this.setState({mark:[40,74,65,86,86]})
//     this.setState({mark:[44,74,65,86,86]})
//   }
//   show1=()=>{
//     this.setState({mark:[40,74,65,86,86]})
//   }
//   show2=()=>{
//     const newmarks=[...this.state.mark]
//     newmarks[2]=99
//     this.setState({mark:newmarks})
//   }
//   render()
//   {
//     return(<>
//       <h1>This is a class condition</h1>
//       <h2>Serial Number : {this.state.sno}</h2>
//       <h2>Student Name : {this.state.sname}</h2>
//       <h2>Student Marks : {
//       this.state.mark.map((v)=><><br/>{v}</>)
//       }
//       {this. state.mark.map((v,index)=><><br/>Mark:{index+1}= {v}</>)}</h2>
//       <button onClick={this.show}>Change Name</button>
//       <button onClick={this.show1}>Change Mark</button>
//       <button onClick={this.show2}>Change Single Mark</button>
//     </>)
//   }
// }
// export default App

// import { aadhar,accno,place,sname } from "./Newreact/Commonvar"
// import Abitha from "./Newreact/Abitha"
// function App()
// {
//   return(<>
//     <Abitha/>
//     <h1>This is default App components</h1>
//     <h2>Aadhar Number : {aadhar}</h2>
//     <h2>Account Number : {accno}</h2>
//     <h2>Place : {place}</h2>
//     <h2>Surname : {sname}</h2>
//   </>)
// }
// export default App

// function App() {
//   var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
//   var s = 0
//   var max = arr[0]
//   var order = arr
//   return (<>

//     <h1>Adding element in an array</h1>
//     <div style={{ display: "none" }}>{order.push(999)}</div>
//     {order.map((item) => <>{item},</>)}
//     <br></br>

//     <h1>Removing element in an array</h1>

//     <div style={{ display: "none" }}>{order.pop()}</div>
//     {order.map((item) => <>{item},</>)}
//     <br></br>

//     <h2>Ascending order</h2>
//   <div style={{ display: "none" }}>{order.sort((a, b) => a - b)}</div>
//     {order.map((item) => (<>{item} </>))}

//     <h2>descending order</h2>
//     <div style={{ display: "none" }}>{order.sort((a, b) => b - a)}</div>
//     {order.map((item) => (<>{item} </>))}

//   </>)
// }
// export default App

// function App() {
//   var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
//   var s = 0
//   var max = arr[0]
//   var order = arr
//   return (<>
//     <h1>React Loop map method</h1>

//     <div style={{ display: "none" }}>
//       {arr.map((v) => <>{max < v && <>{max = v} </>}</>)}
//     </div>
//     <h3>Max of Array:{max}</h3>

//     <h2>Ascenqing order</h2>
//     <div style={{ display: "none" }}>{order.sort()}</div>
//     {order.map((item) => <>{item} </>)}

//     <h2>descending order</h2>
//     <div style={{ display: "none" }}>{order.sort().reverse()}</div>
//     {order.map((item) => <>{item} </>)}
//   </>)
// }
// export default App

// function App()
// {
//   var arr=[11,22,33,44,89,56,77,100]
//   var s=0
//   var max=arr[0]
//   return(<>
//         {/* {arr.map((v)=><>{v}+</>)}
//         <h3>sum of Array:{s}</h3> */}

//         <div>
//         {arr.map((v)=><>{max<v &&<> {max=v}</>}</>)}
//         </div>
//         <h3>max of array:{+max}</h3>
//  </>)  
// }
// export default App

// function App() {
//   var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
//   var s = 0;

//   // calculate sum (your way)
//   arr.map(item=>{
//     s = s + item;
//   });
//   return (<>
//       <h2>Add (loop)</h2>
//       <h4>
//         {arr.map((v,i)=>
//           i===arr.length-1?v:v+"+")}
//         {" = " + s}</h4>
//       <h3>Sum of Array : {s}</h3>

{/* <h1>React Loop map method</h1>
    <h2>New Model Map(loop)</h2>
    {arr.map((v)=><>{v}<br></br></>)}
    <h2>New Model Map OL(loop)</h2>
    <ol type="i">
    {arr.map((v)=><li>{v}</li>)}
    </ol>
    <h2>New Model Map UL(loop)</h2>
    <ul>
    {arr.map((v)=><li>{v}</li>)}
    </ul> */}

{/* <h2>Add(loop)</h2>
    <div style={{display:"none"}}>
    {arr.map((item)=><>{s=s+item}<br></br></>)}
    </div>
    <h4>{arr.map((v)=>v+"+")}</h4>
    <h3>Sum of Array : {s}</h3> */}
{/* {arr.map((v,i)=>(
        <div key={i}>{v}</div>
        ))} */}
{/* </>)
}
export default App */}

// function App()
// {
// var arr=[11,22,33,44,55,66]
// var [v1,,,v2,...v3]=arr
// return(<>
// <h2>spread operator</h2>
// <h3>index 0 : {v1}</h3>
// <h3>index 1 : {v2}</h3>
// <h3>index 3 : {v3}</h3>
// </>)
// }
// export default App

// function App()
// {
// var arr=[11,22,33,44,55,66]
// var [v1,v2,...v3]=arr
// return(<>
// <h2>spread operator</h2>
// <h3>index 0 : {v1}</h3>
// <h3>index 1 : {v2}</h3>
// <h3>index 3 : {v3}</h3>
// </>)
// }
// export default App

// function App()
// {
// var arr=[11,22,33,44,55,66]
// return(<>
// <h2>spread operator</h2>
// <h3>index 0 : {arr[0]}</h3>
// <h3>index 1 : {arr[1]}</h3>
// <h3>index 3 : {arr[3]}</h3>
// <h3>index 6 : {arr[6]}</h3>
// </>)
// }
// export default App

// function App()
// {
//   var res="Fail"
//   var avg=0
//   return(<>
//     <h1>Grade</h1>
//     <h2>{ //Nested if condition
//       (res==="Pass" &&
//     ((avg>=85 && avg<=100 && "Outstanding") ||
//     (avg>=75 && "Excellent") ||
//     (avg>=60 && "Very Good") ||
//     (avg>=45 && "Good") ||
//     "Fair")) ||
//     "No grade because fail"}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var res="Fail"
//   var avg=0
//   return(<>
//     <h1>Grade</h1>
//     <h2>{ //Nested if condition
//       (res==="Pass" &&
//     ((avg>=85 && avg<=100 && "Outstanding") ||
//     (avg>=75 && "Excellent") ||
//     (avg>=60 && "Very Good") ||
//     (avg>=45 && "Good") ||
//     "Fair")) ||
//     "No grade because fail"}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var mark=98
//   return(<>
//     <h1>Grade</h1>
//     <h2>{
//     (mark>=90 && mark<=100 && "A Grade") ||
//     (mark>=75 && "B Grade") ||
//     (mark>=60 && "C Grade") ||
//     (mark>=45 && "D Grade") ||
//     (mark<45 && mark >=0 && "Fail")}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var unit=41
//   return(<>
//     <h1>Electricity Bill</h1>
//     <h2>{`100 units Free `}</h2>
//     <h2>{(unit<=50 && "Minimum bill is 50") ||
//     (unit<=100 && "Amount : ₹0") ||
//     (unit>100 && unit<=200 && `Amount for ${unit} : ₹${(unit-100)*2}`) ||
//     (unit>200 && unit<=300 && `Amount for ${unit} : ₹${(200+(unit-200)*3)}`) ||
//     (unit>300 && unit<=400 && `Amount for ${unit} : ₹${(500+(unit-300)*4)}`) ||
//     (unit>400 && `Amount for ${unit} : ₹${(900+(unit-400)*5)}`)}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var avg=95
//   return(<>
//     <h1></h1>
//     <h2>{(avg>=85 && `Mark : ${avg}<br></br>OutStanding`) || (avg>=75 && "Excellent") || (avg>=65 && "Very Good") || (avg>=45 && "Good") || "Fail"}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var num=0
//   return(<>
//     <h1>React Simple if statement</h1>
//     <h2>{(num>0 && "Possitive") || (num<0 && "Negative") || (num==0 && "0")}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var age=2
//   return(<>
//     <h1>React Simple if statement</h1>
//     <h2>{((age>=18) && "Eligible to vote" || "Not Eligible")}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var num=1992
//   return(<>
//     <h1>React Simple if statement</h1>
//     <h2>{((num%4==0 && num%100!=0) || (num % 400==0) ? "Leap Year" : "Not a Leap Year")}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var num=4
//   return(<>
//     <h1>React Simple if statement</h1>
//     <h2>{((num%2==0) && "Even" || "Odd")}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   var mark=4
//   return(<>
//     <h1>React Simple if statement</h1>
//     <h2>{mark>34 && "Pass" || "Fail"}</h2>
//   </>)
// }
// export default App

// function App()
// {
//   if(true)
//   {
//     var v=100
//     let l=200
//     const c=300
//     v++
//     l++
//     console.log("Let"+l)
//   }
//   return(<>
//       <h1>Variable : Global : {v}</h1>
//       <h1>Does not work let and const : because local</h1>
//   </>)
// }
// export default App

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
//   <h2>Biggeset Number a or b or c : {(a<b && a<c) ?a:(b<c?b:c)}</h2>
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
