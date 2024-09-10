import React, { useState } from 'react'

export function Input() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);
    const [ValueNumber, NewValueNumber] = useState(0);

    const inputValue = (event) => {
        NewValueNumber(event.target.value);
        console.log(ValueNumber)
    }

    const setFn = () => {
        setValue(Number(ValueNumber))
    }

    return (
        <div class="main_div">
            <h1 class="one">Counter 2</h1>
            <div><input class="input" type="Number" placeholder='Enter Number' onChange={inputValue} />
            <button class="set" onClick={setFn}>Set</button></div>
            <p class="value">Current set value : {value}</p>
            <div><button class="button" onClick={() => { setCount(count + value) }}>Add</button>
            <button class="button" onClick={() => { setCount(count - value) }}>remove</button></div>
            <h1 class="one">{count}</h1>

        </div>
    )

}

