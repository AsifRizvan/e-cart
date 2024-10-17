import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Redux/slice/productSlice';
import { addToWishlist } from '../Redux/slice/wishListSlice';
import { addToCart } from '../Redux/slice/cartSlice';
import Header from '../Components/Header';

function Home() {

  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.productReducer)
  const { wishlist } = useSelector((state)=>state.wishlistReducer)
  const  cart  = useSelector((state)=>state.cartReducer)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already exists in wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = (product) =>{
    const existingProduct = cart?.find(item=>item.id == product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Items added successfully. Quantity Updated.")
    }else{
      dispatch(addToCart(product))
      alert("Item added successfully")
    }
  }

  return (
    <>
    <div style={{ margin: "60px" }}>
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <Row>
          {products?.length > 0 ? (
            products.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card className='mt-4' style={{ width: '20rem' }}>
                  <Link to={`/view/${product.id}`} className='d-flex justify-content-center'>
                    <Card.Img variant="top" style={{width:"200px", height:"200px"}} src={product.thumbnail} />
                  </Link>
                  <Card.Body>
                    <Card.Title style={{height:"50px"}} className='text-center mt-3'>{product.title}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Button className='btn btn-light' onClick={()=>handleWishlist(product)}>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </Button>
                      <Button className='btn btn-light' onClick={()=>handleCart(product)}>
                        <i className="fa-solid fa-cart-shopping text-warning"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center text-danger fw-bolder mt-5">
              <p>Nothing to display</p>
            </div>
          )}
        </Row>
      )}
    </div>
    </>
  )
}

export default Home
