import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../Redux/slice/productSlice';

function Header({insideHome}) {
  const dispatch = useDispatch()
  const { wishlist } = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  const [wishlistCount, setWishlistCount] =  useState(0)
  const [cartCount, setCartCount] =  useState(0)

  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])

  useEffect
  return (
    <>
    
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-light' style={{textDecoration:"none"}}><i className="fa-solid fa-cart-shopping fa-bounce"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center">

            {
            insideHome && <Nav.Link className="p-0">
              <div className="input-group">
                <input type="text" className="form-control" placeholder='Search Products' onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '400px' }} />
                <span className="input-group-text bg-white">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </Nav.Link>
            }

            <Nav.Link className="ms-3">
              <Link to={'/wishlist'} className='text-light' style={{ textDecoration: "none" }}>
                Wishlist <Badge bg="secondary">{wishlistCount}</Badge>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={'/cart'} className='text-light' style={{ textDecoration: "none" }}>
                Cart <Badge bg="secondary">{cartCount}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header