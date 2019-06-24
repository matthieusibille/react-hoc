export const initialState = { users: [] };

const removeUser = (state, userId) =>{
    let newUsersArray = state.users.filter( user => user.id !== userId )
    return newUsersArray
}

export function reducer(state, action) {
  switch (action.type) {
    case 'getUsers':
      return { ...state, users: action.payload };
    case 'removeUser':
        let arr = removeUser(state, action.payload)
        return { ...state, users: arr };
    case 'clear':
      return { ...state, users: [] };
    default:
      throw new Error();
  }
}