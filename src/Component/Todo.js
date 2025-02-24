import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo,editTodo } from "../Redux/todoSlice";


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

   
  
    return(
        <div>
      <h2>Todoapp with Redux</h2>
      <div className='input-field'>
      <input type ="text" value = {text} placeholder='Input text' onChange={(e)=>setText(e.target.value)}/>
  

      { isEdit ? <button
        onClick = {()=>saveBtnHandler()}>Save
      </button> :   <button className='add-btn' onClick={handleAddTodo}>addTodo</button>
        }

      </div>

       
      
      <div className="todolist">
        
       {todos.map((todo) => <li className="todos" key={todos.id}  >
    {todo.text}

        <button  className ="delete-btn" onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
        <button onClick ={()=>editHandler(todo)}>Edit</button>
        
    
        </li>    
  
       )}

    

      

    
      </div> 
       

    </div>
    
    );
};

export default Todo;