import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice'

function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cartReducer)

  const [total,setTotal]=useState(0)

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>(p1+p2)))
    }else{
      setTotal(0)
    }
  },[cart])

  return (
    <>
    <div className="container" style={{marginTop:"50px"}}>
      <h1>Cart</h1>
      <hr />

    { 
    cart?.length>0?
     <div className="row mt-5 ">
        <div className="col-lg-8 ">
          <table className="table shadow border rounded">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                cart?.map((product,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td><img className='w-100' style={{ borderRadius:"10px"}} src={product.thumbnail} alt="" /></td>
                  <td><input type="text" className="form-control" value={product.quantity} readOnly /></td>
                  <td>${product.totalPrice}</td>
                  <td><i className="fa-solid fa-trash text-danger ms-3" onClick={()=>dispatch(removeFromCart(product?.id))} style={{cursor:"pointer"}}></i></td>
                </tr>
                ))
              }

            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
            <Link to='/'><button className="btn btn-success">Shop More</button></Link>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="container border rounded shadow p-5 w-100" style={{backgroundColor:"white"}}>
            <h4>Cart Summary<hr /></h4>
            
            <h5>Total products:{cart.length}</h5>
            <h5 className='pt-2'>Total: <span className="text-danger fw-bolder">${total.toFixed(2)}</span></h5>
          </div>
          <div className="d-grid">
            <button className="btn btn-success m-3 rounded">Checkout</button>
          </div>
        </div>
      </div>:
        <div className='text-center'>
        <img style={{height:"400px", width:"400px", borderRadius:"50%"}} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
        <h1 className='text-danger mt-5'>Your Cart is Empty...</h1>
      </div>
      }

    </div>
    </>
  )
}

export default Cart