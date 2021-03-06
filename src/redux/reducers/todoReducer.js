const initState = {
  todosArr: [],
  oldTodosArr: [],
  isSetOldTodos: false,
};
const todosData = (state = initState, action) => {
  switch (action.type) {
    case "SET_TODOS_DATA":
      return {
        ...state,
        todosArr: action.payload,
      };
    case "CHANGE_NEW_TODOS_DATA":
      return {
        ...state,
        oldTodosArr: action.oldTodosArr,
        todosArr: action.todosArr,
      };
    case "SET_IS_OLD_TODOS":
      return {
        ...state,
        isSetOldTodos: !state.isSetOldTodos,
      };
    default:
      return state;
  }
};
export default todosData;
