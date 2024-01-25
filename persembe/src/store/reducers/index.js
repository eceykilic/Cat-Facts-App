import { FETCH_CAT_FACT, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/index.js';

const initialState = {
  catFact: '',
  favorites: [], 
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_FACT:
      return { ...state, catFact: action.payload.fact }; 
      //catFact özelliği, action'ın payload'ındaki fact değeri ile güncellenir.
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload.fact] };
      //favorites özelliği, yeni bir dizi oluşturularak (spread operator kullanılarak) 
      //ve action'ın payload'ındaki fact değeri eklenerek güncellenir.
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter(fact => fact !== action.payload.fact) };
      //favorites özelliği, filter fonksiyonu kullanılarak action'ın payload'ındaki 
      //fact değeri hariç tutularak güncellenir.
    default:
      return state;
  }
};

export default catReducer;