import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice'

function Counter() {

  const [range, setRange] = useState("")
  console.log(range);
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  return (
    
    <>
    <div className='d-flex justify-content-center align-items-center flex-column  mt-5'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success me-3'>Increment</button>
            <button onClick={()=>dispatch(decrement(Number(range)))}  className='btn btn-warning me-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger me-3'>Reset</button>
        </div>
        
    </div>
    <div>
      <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='Enter the range' style={{borderColor:'blue'}} />
    </div>
    </>
    
    
  )
}

export default Counter