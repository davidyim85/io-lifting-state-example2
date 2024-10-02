import { useState } from 'react'
import TodoList from './TodoList'
import Addtodo from './Addtodo'

function App() {
  const [todos, setTodo] = useState(['wash dishes', 'laundry', 'study'])

  return (
   <div style={{ backgroundColor: 'aqua', display: 'flex'}}>
    Hello from Parent
      <TodoList todos={todos}/>
      <Addtodo todos={todos} setTodo={setTodo}/>
   </div>
  )
}

export default App
