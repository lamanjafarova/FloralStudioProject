import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddNewFlower from './pages/add-product';
import Details from './pages/details';
import HomePage from './pages/home';
import WishList from './pages/wishList';

function App() {
  const [wishList, setWishList] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage wishList={wishList} setWishList={setWishList}/>} />
        <Route path='/add-product' element={<AddNewFlower />} />
        <Route path='/wish-list' element={<WishList wishList={wishList} setWishList={setWishList}/>} />
        <Route path='/home/:_id' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
