import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'

function View() {
  const { id } = useParams()
  const { loading} = useSelector((state) => state.productReducer)
  const [product, setProduct] = useState({})
  const { wishlist } = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const  cart  = useSelector((state)=>state.cartReducer)

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'))
    setProduct(products?.find(product => product.id == id))
  }, [])

  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already exists in wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  // const handleCart=(product)=>{
  //   dispatch(addToCart(product))
  //   dispatch(removeFromWishlist(product.id))
  // }

  const handleCart = (product) =>{
    const existingProduct = cart?.find(item=>item.id == product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Items added successfully. Quantity Updated.")
      dispatch(removeFromWishlist(product.id))
    }else{
      dispatch(addToCart(product))
      alert("Item added successfully")
      dispatch(removeFromWishlist(product.id))
    }
  }

  return (
    <>
      {
      loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div className="container">
          <div
            className="row p-5 border border-dark shadow"
            style={{ marginTop: "100px", backgroundColor: "white", borderRadius: "5px" }}
          >
            <div className="col-lg-5">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "500px", borderRadius: "10px" }}
                src={product?.thumbnail}
                alt={product?.title}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 ms-3">
              <p>pid: {product?.id}</p>
              <h1>{product?.title}</h1>
              <h5 className="fw-bolder">
                Price: <span style={{ color: "red" }}>${product?.price}</span>
              </h5>
              <p>{product?.description}</p>
              <div className="d-flex justify-content-between mt-4">
                <Button className="btn btn-outline-dark" onClick={()=>handleWishlist(product)}>
                  <i className="fa-solid fa-heart text-danger"></i>
                </Button>
                <Button className="btn btn-outline-dark ms-2" onClick={()=>handleCart(product)}>
                  <i className="fa-solid fa-cart-shopping text-warning"></i>
                </Button>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default View
