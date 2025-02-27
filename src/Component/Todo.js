import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo,editTodo,clearTodo } from "../Redux/todoSlice";
import{FaPlus,FaPencilAlt,FaTrash} from 'react-icons/fa'


const Todo = () =>{
    const [text,setText]=useState("");
    const [editTodoObj,seteditTodoObj]=useState({});
    const [isEdit,setIsEdit]=useState(false);
    const todos = useSelector((state)=>state.todo.todos);
    const dispatch = useDispatch();
    console.log(todos);

  const handleAddTodo = () =>{
    if(text){
        dispatch(addTodo({
          id:Date.now(), text:text }

        ));
        setText("");
    }
  }
   const handleDeleteTodo = (id)=>{
    dispatch(deleteTodo(id));
   };

   const editHandler =(textObj)=>{
    seteditTodoObj(textObj);
    setText(textObj.text);
    setIsEdit(true);
   }
   const saveBtnHandler = ()=>{
    dispatch(editTodo({id:editTodoObj.id,text:text}));
    setText('');
    setIsEdit(false);
   }
   
   const handleClearTodo =()=>{
    dispatch(clearTodo());
   }
   
  
    return(
       <div className="items-center flex flex-col gap-4 p-4">
        <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4 ">
      <h2 className="text-center font-bold text-3xl mb-4">Todoapp with Redux</h2>
     <div className="flex">
      <input  className = "py-2 px-4 border rounded w-full "type ="text" value = {text} placeholder='Enter text' onChange={(e)=>setText(e.target.value)}/>
      { isEdit ? <button
        onClick = {()=>saveBtnHandler()}>Save
      </button> :   <button className='py-2 px-4 bg-blue-500 rounded' onClick={handleAddTodo}><FaPlus/></button>
        }
       </div>
       </div>
    
       
       

      {todos.length > 0 && (
        <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4  "> 
        <ul>
          {todos.map((todo)=>(
          <li className="flex item-center justify-between bg-white p-3 mb-3">
            <span>{todo.text}</span>
            <div>
            <button  className =" bg-green-400 mr-2 p-2  rounded" onClick={()=>handleDeleteTodo(todo.id)}><FaTrash/></button>
        <button className = "bg-red-400 p-2 rounded" onClick ={()=>editHandler(todo)}><FaPencilAlt/></button>
        </div>
          </li>

          ))}
        </ul>
         </div>
    
       )}
       <div>
       <button  className = "bg-red-400 mr-2 p-2 rounded" onClick={handleClearTodo}>Clear</button>
      </div>

    
    </div>
      

    
    );
};

export default Todo;