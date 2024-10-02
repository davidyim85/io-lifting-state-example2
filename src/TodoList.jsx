const TodoList = (props) => {
    return (
      <ul style={{backgroundColor: 'red'}}>
        {props.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    );
  };
  
  export default TodoList;