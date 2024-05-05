import React from 'react'
import {useState, useEffect} from "react";
import Layout from '../components/layout/Layout'
import axios from 'axios'

const handleDateUpdate = async (itemId,updatedDate) => {
  try{
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/order/update`,{
      method: "PUT",
      body: JSON.stringify({
        itemId: itemId,
        deliveryDate: updatedDate
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      credentials: 'include'
    })
    console.log("date",updatedDate);
    const update = await res.json();
  }catch(err){
    console.log("catch err",err);
  }
}

const handleStatusUpdate = async (itemId,updatedStatus) => {
  try{
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/order/update`,{
      method: "PUT",
      body: JSON.stringify({
        itemId: itemId,
        status: updatedStatus
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      credentials: 'include'
    })
    console.log("whyy");
    const update = await res.json();
  }catch(err){
    console.log("catch err",err);
  }
}

const ShipOrders = () => {

  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    console.log("inside url",`${process.env.REACT_APP_SERVER_URL}/orderItem/seller`);
    try{
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/orderItem/seller`,{
        method: "GET",
        credentials: 'include'
      })
      console.log("inside1");
      const data = await res.json();

      await setData(data);
      console.log("orders:",data);
    
    }catch(err){
      console.log("catch err",err);
    }
  };

  useEffect(()=>{
    fetchInfo();
  }, []); 

 return (
      <Layout>
      
      <div className="container nav-padd">
      <h4 className='heading'> Ship Orders</h4> 
        <div className="row table-heading">
          <div className="col-md-1">
            <h6>Order ID</h6>
          </div>
          <div className="col-md-1 col-half">
            <h6>Ordered on</h6>
          </div>
          <div className="col-md-3">
            <h6>Product Details</h6>
          </div>
          <div className="col-md-3">
            <h6>Customer Details</h6>
          </div>
          <div className="col-md-2">
            <h6>Expected Delivery</h6>
          </div>
          <div className="col-md-2 col-half">
            <h6>Status</h6>
          </div>
        </div>
  
        {data?.map( (OrderObj,index) => {
  
          console.log("product:wvewv");
  
          return (
          <div className="row row-list">
          <div className="col-md-1 row-text" width="5px">
            <p className="shipOrder-orderID" style={{"word-wrap": "break-word"}}> {OrderObj.order._id} </p>
          </div>
  
          <div className="col-md-1 row-text col-half">
            <p className="shipOrder-orderDate"> 12-03-42 {OrderObj.order.date} </p>
          </div>
  
          <div className="col-md-3 row-text">
            <p className="shipOrder-productTitle">
              <img
                src={OrderObj.productDetail.images?OrderObj.productDetail.images[0]:""}
                style={{ width: 50, height: 50 , marginRight: "12px"}}
                alt="product img"
              />
               {OrderObj.productDetail.name}
            </p>
            <p className="shipOrder-productDesc">
              {OrderObj.productDetail.description}
            </p>
          </div>
  
          <div className="col-md-3 row-text">
            <p className="shipOrder-buyerName">{OrderObj.order.buyer_details.name}</p>
            <p className="shipOrder-buyerPhone">+91 {OrderObj.order.buyer_details.phone}</p>
            <p className="shipOrder-buyeraddress">{OrderObj.order.buyer_details.address}</p>
          </div>
  
          <div className="col-md-2 row-text">
            <input
                    type="date"
                    style={{}}
                    defaultValue={OrderObj.order.exp_delivery_date}
                    onChange={(e) => {
                      e.preventDefault();
                      handleDateUpdate(OrderObj.order._id,e.target.value)}}
            />
          </div>
  
          <div className="col-md-2 col-half">
            <select className={`order-status row-text order-${OrderObj.order.status}`} aria-label="Default select example" defaultValue={OrderObj.order.status}
             onChange={(e) => {
              e.preventDefault();
              handleStatusUpdate(OrderObj.order._id,e.target.value)}}>
              <option value={"placed"} >Confirmed</option>
              <option value={"shipped"} >Shipped</option>
              <option value={"delivered"} >Delivered</option>
              <option value={"cancel"} >Cancelled</option>
            </select>
          </div>
          </div>
      );
      })}
  
        
      </div>
      </Layout>
    )
}

export default ShipOrders