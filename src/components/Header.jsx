import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
    
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
         <Navbar style={{height:"100px",}} className=" ">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} className='fs-1' style={{textDecoration:"none",color:"black", fontWeight:'bold'}}>
     <img  width={100} height={70} src="https://logopond.com/logos/c6b8804514ef227cafa11a270e4e3474.png" alt="" /> <span className='text-light ms-3'> T Rex</span></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link style={{padding:'10px'}} className='btn bg-light'>
                <Link to={'/wishlist'} className='d-flex align-items-center text-dark' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-heart text-danger me-2'></i>Whishlist
                <Badge className='ms-2 rounded' bg="warning text-dark">{wishlist.length}</Badge>
                </Link>
            </Nav.Link>

            <Nav.Link style={{ padding:'10px'}} className='btn  ms-4 bg-light'>
                <Link to={'/cart'} className='d-flex align-items-center text-dark' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-cart-shopping text-dark me-2'></i>Cart
                <Badge className='ms-2 rounded' bg="warning text-dark">{cart.length}</Badge>
                </Link>
            </Nav.Link>  
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>


  )
}

export default Header