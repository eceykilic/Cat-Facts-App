// App.jsx
import "./reset.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatFact, addToFavorites, removeFromFavorites } from './store/actions/';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const App = () => {
  const dispatch = useDispatch();
  const { catFact, favorites } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCatFact());
  }, [dispatch]); 
  // Komponent monte edildiğinde, 
  //fetchCatFact action'ı çağrılarak bir kedi gerçeği çekiliyor.

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(catFact)); //aksiyon çağırılır ve kedi gerçeği fav
    toast.success('Added to favorites!');
    dispatch(fetchCatFact()); //yeni bir fact gelsin
  };

  const handleRemoveFromFavorites = (fact) => {
    dispatch(removeFromFavorites(fact));
    toast.error('Removed from favorites!');
  };

  const handleNextCatFact = () => {
    dispatch(fetchCatFact()); //yeni fact çağırılır
  };

  return (
    <div className="content">
    <header className="title">
    <h1 className="app-name">Cat Facts</h1>
    <img className="cat-war" src="./cat war.png" alt="" />
    <p className="aciklama">Robotic Cat War Scene, created with Fooocus</p>
    </header>
    <main>
      <p className="fact">{catFact}</p>
      <div className="btn-cont">
      <button className="btn" onClick={handleAddToFavorites}>Add to Favorites</button>
      <button className="btn" onClick={handleNextCatFact}>Another One</button>
      </div>
      <h2 className="favoriler">Favorites</h2>
      <ul>
        {favorites.map((fact, index) => (
          <li key={index}>
            {fact}
            <button className="kaldirma-btn" onClick={() => handleRemoveFromFavorites(fact)}>Remove</button>
          </li>
        ))}
      </ul>
      
      <ToastContainer/>
    </main>
    <footer>

    </footer>
    </div>
  );
};

export default App;
