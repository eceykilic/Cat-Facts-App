// store/store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";// Redux Thunk middleware
import catReducer from './reducers/index';

// Redux Thunk middleware'i applyMiddleware fonksiyonu ile ekliyoruz
const store = createStore(catReducer, applyMiddleware(thunk));

export { store };

/*-neden thunk?
1. Redux Thunk, Redux'un varsayılan olarak senkron eylemleri desteklemesi nedeniyle 
asenkron işlemleri daha iyi yönetebilmek için kullanılır.
2. Örneğin, bir API'den veri çekmek veya bir asenkron işlem gerçekleştirmek gibi durumlarda 
Redux Thunk kullanılır. 

*Redux Thunk, action creator fonksiyonlarına Redux store'un mevcut durumunu ve dispatch fonksiyonunu 
(yani, başka eylemleri tetikleme yeteneğini) sağlayan bir argüman seti ekler.
*Bu, bir eylemin dispatch edilmesinden önce veya sonra belirli koşullara bağlı olarak 
diğer eylemleri tetikleme esnekliği sağlar.



*/

