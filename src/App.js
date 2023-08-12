// import logo from './logo.svg';
import './App.css';
import data from './component1/data.js'
import Main from './component1/Main.js'

function App() {
  let zedData = data.map(x=>
      <Main
      key={x.id}
      {...x}/>)
  return (
    <div >
      {zedData}
    </div>
  );
}

export default App;






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
