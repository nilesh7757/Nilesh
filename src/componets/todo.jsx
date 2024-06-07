import { useState,useEffect } from "react";
// import Header from './componets/Navbar'
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

const handleAdd = ()=>{
  setTodos([...todos,{id:uuidv4(),todo,isCompleted: false}])
  setTodo("")
  saveToLocal()
}

useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(todoString); 
    setTodos(todos)
  }
}, [])

const saveToLocal = ()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}

const handleChange = (e)=>{
  setTodo(e.target.value)
}

const toggleFinished = (e) => {
  setshowFinished(!showFinished)
}

const handleEdit = (e,id)=>{
  let t = todos.filter(i => i.id === id)
  setTodo(t[0].todo)
  let newTodos = todos.filter(i => {
    return id !== i.id
  });
  setTodos(newTodos);
  saveToLocal()
}

const handleDelete = (e,id)=>{
  let newTodos = todos.filter(i => {
    return id !== i.id
  });
  setTodos(newTodos)
  saveToLocal()
}

const handleCheck = (e)=>{
  let id = e.target.name;
  let index = todos.findIndex(item=>{
      return item.id === id;
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  saveToLocal()

}
  return (
    <div className="todo">
    <div className=" w-[65%] mx-auto my-3 rounded bg-purple-400 h-[85vh] py-5 text-black" >
      <h1 className="text-3xl font-bold w-[50%] text-center mx-auto">Hello This Is Todo List For You</h1>
      <div className="addTodo my-3 py-3 w-full flex justify-center">
        <input className="w-3/4 rounded-full px-3 mx-3 text-black" type="text" onChange={handleChange} value={todo} />
        <button disabled={todo.length<1} className="bg-purple-700 mx-3 px-3 rounded-full text-white hover:bg-violet-900 hover:font-bold" onClick={handleAdd}>
          Add
        </button>
      </div>
        <h2 className="text-2xl my-4 font-bold mx-5">Your Todos</h2>
        <div className="special mx-7">
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
        </div>
        <div className="line h-[1.5px] bg-black w-3/4 mx-auto"></div>
      <div className="todos mt-4 m-auto w-full flex flex-col items-center">
      {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
        {
          todos.map(item =>  {
        return (showFinished || !item.isCompleted) && <div className="todo mx-4 my-1 w-3/4 rounded flex justify-between">
        <div className="data flex gap-3">
        <input onChange={handleCheck} type="checkbox" name={item.id} id="" checked={item.isCompleted} />
        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        </div>
        <div className="btns flex">
        <button onClick={e => handleEdit(e,item.id)} className="bg-purple-700 mx-3 px-3 rounded-full text-white hover:bg-violet-900">Edit</button>
        <button onClick={e => handleDelete(e,item.id)} className="bg-purple-700 mx-3 px-3 rounded-full text-white hover:bg-violet-900">Delete</button>
        </div>
        </div>
          })}
          </div>
    </div>
    </div>
  );
}

export default TodoApp