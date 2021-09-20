import {useState} from 'react';
const Nav = () => {

    const [count, setCount] = useState(0);

    const initiate = (() => {
        setCount(count + 1);
    });

    return (
        <div>
            <h1>In Nav component</h1>
            <h3>Count: {count}</h3>
            <button onClick={initiate}>Click</button>
        </div>
    )
}

export default Nav;