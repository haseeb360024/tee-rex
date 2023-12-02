import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import {emptyCart, removeFromCart} from '../redux/slices/cartSlice'
import { Row } from 'react-bootstrap'



function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate();
  
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div style={{marginTop:"100px"}}>
    <Row className='m-5'>
    {
      cartArray.length>0?
      <div className='row mt-5'>
        <div className='col-lg-7'>
          <table className='table shadow border'>
            <thead></thead>
            <tbody>
              {
         
      cartArray.map((product,index)=>(
   
        <tr key={index}>
          <td className='text-center fw-bolder pt-5 '>{index+1}.</td>
          <td className='text-center fw-bolder '><img width={'150px'} height={'150px'} src={product.image} alt="" /></td>
          <td className='text-center fw-bolder pt-5 bg-dark text-light'>{product.title}</td>
          <td className='text-center fw-bolder pt-5 bg-danger text-light'>${product.price}</td>
          <td className='text-center pt-5 bg-dark'><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
        </tr>
      ))
  }
  </tbody>
   </table>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-4'>
          <div className='border p-3 rounded shadow bg-light'>
          <h1 className='text-primary'>Cart Summary</h1>
          <h4 className='mt-3 '> total Products : <span>{cartArray.length}</span></h4>
          <h4 className=''>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
          <div className='d-grid'>
            <button className='btn btn-success rounded'>Check Out </button>
          </div>
          </div>
      
        </div>
      </div>

    
    :<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center '>
      <img height={'250px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="" />
      <h3 className='fw-bolder text-primary'>Your cart is empty!!!</h3>
      <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
    </div>
  }
   </Row>
   </div>
  )
}
export default Cart