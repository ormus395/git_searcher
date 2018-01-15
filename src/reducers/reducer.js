import redux from 'redux';

const initialState = {
  username: '',
  userProfile: {},
  repos: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.username
      }
    break;
    case 'UPDATE_USERPROFILE':
      return {
        ...state,
        userProfile: action.userProfile
      }
    break;
    case 'UPDATE_REPOS':
    return {
      ...state,
      repos: action.repos
    }
    break;
    default: 
    return state;
  }
}

export default reducer;