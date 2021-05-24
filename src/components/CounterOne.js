import React, { useState } from 'react';

const CounterOne = () => {
    const birthValue = 0;
    const [count, setCount] = useState(birthValue)
    return (
        <div>
            <p>count: { count }</p>
            <button onClick={() => setCount( count + 1)}>Increment</button>
            <button onClick={() => setCount( count - 1)}>Decrement</button>
            <button onClick={() => setCount(birthValue)}>Reset</button>
        </div>
    );
};

export default CounterOne;