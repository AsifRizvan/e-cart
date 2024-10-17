import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <MDBFooter style={{backgroundColor:'#262626', color:'#f2f2f2'}} className='text-center text-lg-start text-muted mt-5'>

      <section className='pt-2' style={{color:'#f2f2f2'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'  >
              <i className="fa-solid fa-cart-shopping me-2"></i>
                E-CART
              </h6>
              <p>
              E-Cart is your go-to online platform for a wide range of products, offering a seamless shopping experience with secure payments and fast delivery.


              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Resources</h6>
              <p>
                <a href='https://vitejs.dev/' className='text-reset' style={{textDecoration:"none"}}>
                  Vite
                </a>
              </p>
              <p>
                <a href='https://mdbootstrap.com/' className='text-reset' style={{textDecoration:"none"}}>
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href='https://react-bootstrap.netlify.app/' className='text-reset' style={{textDecoration:"none"}}>
                  React Boostrap
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'  >Links</h6>
              <p>           
                <Link to={'/'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Home
                </Link>
              </p>
              <p>
              <Link to={'wishlist'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Wishlist
                </Link>
              </p>
              <p>
              <Link to={'cart'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Cart
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'  >Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                ABCD, XY 12345, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                ecart@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-2' /> +01 111 222 33
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          e-cart.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer