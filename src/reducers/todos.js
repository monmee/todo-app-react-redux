const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        (todo.id === action.id) ? {...todo, completed: !todo.isCompleted}
        : todo
      )
    default: 
      return state;
  }
};

export default todos;