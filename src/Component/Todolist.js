import { useState ,useMemo} from "react";
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo,editTodo,clearTodo,setFilter} from "../Redux/todoSlice";
import{FaPencilAlt,FaTrash} from 'react-icons/fa';



const Todolist = () => {
    const [text,setText]=useState("");
    const [editTodoObj,seteditTodoObj]=useState({});
    const [isEdit,setIsEdit]=useState(false);
    const todos = useSelector((state)=>state.todo.todos);
    

    const dispatch = useDispatch();
    console.log(todos);
   
   const[filteredTodos,setFilteredTodos]=useState();
   

    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
       };
    
       const editHandler =(textObj)=>{
        dispatch(editTodo({id:editTodoObj.id,text:text}));
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

    
      
  
    

  return (
    <div  className=" items-center  w-full gap-4 " >
    {filteredTodos?.length <= 0 && (
            <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4  "> 
            <ul>
              {filteredTodos?.map((todo)=>(
              <li className="flex item-center justify-between bg-white p-3 mb-3">
                <span>{todo.text}</span>
                <div className="flex">
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
        
           ) }
          
    



export default Todolist;
