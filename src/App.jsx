import './index.css'
import { useState } from 'react'


function App() {
    const [count, setCount] = useState(0);

    let addvalue = () => {
        setCount(count + 1);
    }

    let removeValue = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

  return (
    <>
        <div className='flex flex-col justify-center items-center h-screen w-full bg-[#242424] gap-6'>
        <h1 className='text-white font-medium text-4xl'>The Counter value is {count}</h1>
        <button className='text-white rounded-full px-10 py-2 bg-blue-700' onClick={addvalue}>Add Value</button>
        <button className='text-white rounded-full px-10 py-2 bg-blue-700' onClick={removeValue}>Remove Value</button>
        </div>
    </>
  )
}

export default App
