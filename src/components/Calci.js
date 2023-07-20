import React, { useState } from 'react'
import '../styles/Calci.css'

const Calci = () => {
    const [text, setText] = useState("");
    const [storedValue, setstoredValue] = useState(null)

    const onClick = (e) => {
        setText(text + e.target.value);
    }

    const result=()=>{
        let res=eval(text)
        setText(res)
    }

    const clear=()=>{
        setText('')
    }

    const Mplus=()=>{
        setstoredValue(text)
        setText("")
    }

    const Mminus=()=>{
        setText(storedValue-text)
    }

    

    return (
        <div className='center'>
            <div className="mb-3">
                <label htmlFor="result" className="form-label">Result</label>
                <input type="text" className="form-control form" name='result' id="result" defaultValue={text} />
            </div>
            <div>
                <button onClick={clear}className='btn inside'>C</button>
                <button onClick={onClick} className='btn inside' value="%">%</button>
                <button onClick={Mplus} className='btn inside'>M+</button>
                <button onClick={Mminus} className='btn inside'>M-</button>
            </div>
            <div>
                <button onClick={onClick} className='btn inside' value="7">7</button>
                <button onClick={onClick} className='btn inside' value="8">8</button>
                <button onClick={onClick} className='btn inside' value="9">9</button>
                <button onClick={onClick} className='btn inside' value="*">*</button>
            </div>
            <div>
                <button onClick={onClick} className='btn inside' value="4">4</button>
                <button onClick={onClick} className='btn inside' value="5">5</button>
                <button onClick={onClick} className='btn inside' value="6">6</button>
                <button onClick={onClick} className='btn inside' value="-">-</button>
            </div>
            <div>
                <button onClick={onClick} className='btn inside' value="1">1</button>
                <button onClick={onClick} className='btn inside' value="2">2</button>
                <button onClick={onClick} className='btn inside' value="3">3</button>
                <button onClick={onClick} className='btn inside' value="+">+</button>
            </div>
            <div>
                <button onClick={onClick} className='btn inside' value="0">0</button>
                <button onClick={onClick} className='btn inside' value=".">.</button>
                <button onClick={result}className='btn inside'>=</button>
                <button onClick={onClick} className='btn inside' value="/">/</button>
            </div>
        </div>
    )
}

export default Calci;
