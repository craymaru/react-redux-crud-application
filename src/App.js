import React, { Component } from "react";

// function App() {
//   return (
//     // JSX stands for JavaScript XML.
//     <h1>
//       Hello, world!
//     </h1>
//   );
// }

// class App extends Component {
//   render() {

//     // const greeting = "Hi!";
//     // const dom = <h1 className="foo">{greeting}</h1>;
//     // return dom;
    
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("Clicked!")}}/>
//         <input type="text" onChange={() => {console.log("Changed!")}}/>
//       </React.Fragment>
//     )

//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
