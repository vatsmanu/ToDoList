import { ADD_TODO, DELETE_TODO } from "../actionTypes";

const initialState = {
  todo_list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todo_list: [ ...state.todo_list, { id, task }]
      };
    }
    default:
      return state;
  }
}
