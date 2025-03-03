import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,editTodo} from "../Redux/todoSlice";
import{FaPlus} from 'react-icons/fa';
import Tabs from "./Tabs";
import Todolist from "./Todolist";






const Todo = () =>{
    const [text,setText]=useState("");
    console.log(text.length);
    const todos = useSelector((state)=>state.todo.todos);
    const selectedTab= useSelector(state=>state.todo.filter);
    console.log("todos", todos,selectedTab);
      const [isEdit,setIsEdit]=useState(false);
      const [editTodoObj,seteditTodoObj]=useState({});
  
    
    const dispatch = useDispatch();
    console.log(todos);





    

  const handleAddTodo = () =>{
    if(text){
        dispatch(addTodo({
          id:Date.now(), text:text }
        ));
        setText("");
  
    }
    else{
      alert("Please enter some task");
    }
  }
  

const saveBtnHandler = ()=>{
        dispatch(editTodo({id:editTodoObj.id,text:text}));
        setText('');
        setIsEdit(false);
       }
  
  

   
  
  
    return(
       <div className="items-center flex flex-col gap-4 p-4">
       <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4 ">
      <h2 className="text-center font-bold text-3xl mb-4">Todoapp with Redux</h2>
      <div className="flex">
      <input  className = "py-2 px-4 border rounded w-full "type ="text" value = {text} placeholder='Enter text' onChange={(e)=>setText(e.target.value)}/>
      {isEdit ? <button onClick={()=>saveBtnHandler()}>Save</button> :
       <button className='py-2 px-4 bg-blue-500 rounded' onClick={handleAddTodo}> <FaPlus/></button>}
        
       </div>
       </div>

        
       <Tabs/>
       <Todolist/>
       </div>
  )}
       
       
    
    
      

    


export default Todo;