
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './Redux/counterSlice';
import Todo from './Component/Todo';




function App (){
  const counter = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
    <h1>Learning Redux</h1>
    <div className='form'>
    <p>count = {counter}</p>
    <button className='increment-btn' onClick={()=>dispatch(increment())} >Increment</button>
    <button className='decrement-btn' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    <Todo/>
    </div>
    
  );
};

export default App;