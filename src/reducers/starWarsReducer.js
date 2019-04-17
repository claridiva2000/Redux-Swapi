import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions';
/* we need our action types here*/

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log(initialState)
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetching: true
      };
    case FETCH_DATA_SUCCESS:
    console.log(action.payload);
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
