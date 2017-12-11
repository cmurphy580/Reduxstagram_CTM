function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      //return the existing state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      //we need to return the new state without the deleted comment
      return [
        //copy up until the one we want to delete
        ...state.slice(0, action.i),
        //after the deleted one to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
}

function comments(state = [], action) { //lesson 16
  if (typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one - redux reducer composition
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
