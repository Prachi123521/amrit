import { createSlice } from "@reduxjs/toolkit";

{/*const task = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem(('todos'))) : []*/}




const initialState = {
    todos:[],
}
const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
              state.todos.push(action.payload);
              console.log(action.payload);
              
              {/*localStorage.setItem('todos',JSON.stringify(state.todos.map(task=>task)))*/}
              
              
        },   
    
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
          
        },

        editTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.text=action.payload.text
                }
                return todo;
            })
        }
        

        
        

        },
        
        
    },
);
console.log("Actions" ,todoSlice.initialState);

export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;