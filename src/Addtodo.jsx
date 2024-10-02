const Addtodo = (props) => {
    return (
      <button onClick={() => props.setTodo([...props.todos, 'drink water'])}>Add todo</button>
    );
  };
  
  export default Addtodo;