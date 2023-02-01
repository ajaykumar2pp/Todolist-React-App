import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import './Ajay.css';
import AddTodolist from './AddTodolist';
import TodoList from './TodoList';
import UpdateTodolist from './UpdateTodolist';

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<TodoList />}  ></Route>
        <Route path="/add" element={ <AddTodolist />} ></Route>
        <Route path="/update" element={ <UpdateTodolist />}></Route>
        
      </Routes>
     
    </div>
  )
}

export default App