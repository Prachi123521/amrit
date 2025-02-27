
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './Redux/counterSlice';
import Todo from './Component/Todo';




function App (){
  const counter = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
    <h1 className = "text-blue-900  text-3xl font-bold text-center">Learning Redux</h1>
    <p className= "text-center">count = {counter}</p>
    <div className='text-center'>
    <button className=' bg-blue-500 rounded px-4 py-2 mr-2' onClick={()=>dispatch(increment())} >Increment</button>
    <button className='bg-blue-500 rounded px-4 py-2 ' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    <Todo/>
    </div>
    
  );
};

export default App;