// store/store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";// Redux Thunk middleware
import catReducer from './reducers/index';

// Redux Thunk middleware'i applyMiddleware fonksiyonu ile ekliyoruz
const store = createStore(catReducer, applyMiddleware(thunk));

export { store };
