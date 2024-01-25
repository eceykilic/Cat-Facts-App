import { FETCH_CAT_FACT, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/index.js';

const initialState = {
  catFact: '',
  favorites: [],  // Move favorites directly under the root level
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_FACT:
      return { ...state, catFact: action.payload.fact };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload.fact] };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter(fact => fact !== action.payload.fact) };
    default:
      return state;
  }
};

export default catReducer;