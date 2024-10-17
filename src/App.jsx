
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'

function App() {

  const location = useLocation(); 
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header insideHome={isHomePage} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
