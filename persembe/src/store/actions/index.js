import axios from 'axios';

export const FETCH_CAT_FACT = 'FETCH_CAT_FACT';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const fetchCatFact = () => {
    return (dispatch) => {
      axios.get('https://catfact.ninja/fact')
        .then(response => {
          dispatch({ type: FETCH_CAT_FACT, payload: { fact: response.data.fact } });
        })
        .catch(error => {
          console.error('Error fetching cat fact:', error);
        });
    };
  };
  export const addToFavorites = (fact) => {
    return (dispatch) => {
      dispatch({ type: ADD_TO_FAVORITES, payload: { fact } });
    };
  };


  export const removeFromFavorites = (fact) => {
    return (dispatch) => {
      dispatch({ type: REMOVE_FROM_FAVORITES, payload: { fact } });
    };
  };