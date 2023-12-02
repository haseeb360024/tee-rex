import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { addToWhishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
function Home() {
    const[data,setData] =useState([])
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
  .then(response=> response.json())
  .then(products => setData(products))
},[])
  
  const dispatch = useDispatch()
  return (
   <Row className="ms-5" style={{marginTop:"100px"}}>
    {
      data?.length>0?data?.map((product,index)=>(
   
    <Col style={{borderRadius:'20px'}} key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
    <Card   className=' text-dark fw-bolder text-center fs-22' style={{ width: '22rem', height:'33rem', background:'lightblue', borderRadius:'50px' }}>
      <Card.Img style={{marginBottom:'20px'}} height={'250px'}  variant="top" src={product?.image} />
      <Card.Body style={{ backgroundColor:'black', color:'white'}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         <p>{product?.description.slice(0,55)}...</p>
         <h5>$ {product?.price}</h5>
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button onClick={()=>dispatch(addToWhishlist(product))} className="btn btn-light"> 
        <i className="fa-solid fa-heart text-danger fa-1x"></i>
        </Button>
        <Button onClick={()=>dispatch(addToCart(product))} className="btn btn-light"> 
        <i className="fa-solid fa-cart-plus text-success fa-1x"></i>
        </Button>
        </div>
      </Card.Body>
    </Card>

    
    </Col>
    )):<p className='text-danger fw-bolder fs-4'>Nothing To Display!!!</p>
 }

   </Row>
  )
}


export default Home