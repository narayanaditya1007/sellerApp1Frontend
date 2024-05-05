import {React, useState, useEffect} from "react";
import { useNavigate as useHistory } from 'react-router-dom';
import Layout from '../components/layout/Layout'
import axios from 'axios'
import ProductUpdate from './ProductUpdate';
import { Link, useLocation} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const RestockInventory = () => {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try{
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/seller`,{
      credentials: 'include'
    })

    const data = await res.json();
    setData(data);
    console.log(data);

    }catch(err){
      console.log("catch err",err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Layout>
    <div className="container nav-padd" style={{"maxWidth":"80vw"}}>
    <h4 className='heading'> Update Inventory </h4>
      <div className="row table-heading">
        <div className="col-md-7">
          <h4 className="table-head-text">Product</h4>
        </div>
        <div className="col-md-2">
          <h4 className="table-head-text">Price</h4>
        </div>
        <div className="col-md-2">
          <h4 className="table-head-text">Quantity</h4>
        </div>
        <div className="col-md-1">
        </div>
      </div>

      {data?.map( (productObj) => {
        
        return (
        <div className="row row-list">
        <div className="col-md-7 my-auto">
         <div className="row"> 
         <div className="col-md-5 my-auto">
          <p className="product-title">
            <img
              src={productObj.images[0]}
              style={{ width: 50, height: 50 , marginRight: "12px"}}
              alt=""
            />
             {productObj.name}
          </p>
          </div>
          <div className="col-md-6 my-auto">
          <p className="product-desc">
            {productObj.description}
          </p>
          </div>
         </div>
        </div>

        <div className="col-md-2 my-auto">
          <p className="product-price"> {productObj.price} </p>
        </div>

        <div className="col-md-2 my-auto">
          <p className="product-quantity"> {productObj.quantity} </p>
        </div>

        <div className="col-md-1 col-5 my-auto">
            
            <Link to='/productUpdate' state={productObj}><Button variant="outline-secondary" size="sm">
              <i className="fa fa-pencil fa-lg" style={{color: "#193C4D"}}/> Edit
            </Button></Link>
        </div>
        </div>
    );
    })}

      
    </div>

    </Layout>
  )
}

export default RestockInventory