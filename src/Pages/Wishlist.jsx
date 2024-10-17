import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Redux/slice/wishListSlice';
import { addToCart } from '../Redux/slice/cartSlice';


function Wishlist() {

  const dispatch = useDispatch()
  const { wishlist } = useSelector((state)=>state.wishlistReducer)

  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div style={{margin:"50px"}}>
    <Row >
      <h1>Wishlist</h1>
      <hr />
      {
        wishlist?.length>0?wishlist.map(product=>(
          <Col sm={12} md={6} lg={4} xl={3} >
          <Card className='mt-4' style={{ width: '20rem' }}>
                  <Link to={`/view/${product.id}`} className='d-flex justify-content-center'>
                    <Card.Img variant="top" style={{width:"200px", height:"200px"}} src={product.thumbnail} />
                  </Link>
                  <Card.Body>
                    <Card.Title style={{height:"50px"}} className='text-center mt-3'>{product.title}</Card.Title>
              <div className="d-flex justify-content-between">
              <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist(product.id))}><i class="fa-solid fa-trash text-danger"></i></Button>
              <Button className='btn btn-light' onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-shopping text-warning"></i></Button>
              </div>
            </Card.Body>
           </Card>
          </Col>
        )): <div className='text-center'>
          <img style={{height:"400px", width:"400px", borderRadius:"50%"}} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
          <h1 className='text-danger mt-5'>Your Wishlist is Empty...</h1>
        </div>
      }
    
    </Row>
    </div>
  )
}

export default Wishlist