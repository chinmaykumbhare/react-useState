import {useState} from 'react';
import Nav from "./components/Nav";
import './App.css';

function App() {

    const [counter, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const incrementer = (() => {
       // setCount(prev => prev + 1);
        setCount(counter + 1);
        setFlag(flag => !flag);
        //console.log(flag);
    });

  return (
    <div className = {flag ? "active" : "not-active"}>
      <h1>Hello World!</h1>
        {/*<h3>{"c" +"k"}</h3>*/}
        <h3>Counter: {counter}</h3>
        <h3>Flag: {"" +flag}</h3>
        <button onClick={incrementer}>Click</button>
        <hr/>
        <Nav/>
    </div>
  );
}

export default App;

/*
* NOTE:
* useState depends on the COMPONENT
* scope = the component itself
*/
