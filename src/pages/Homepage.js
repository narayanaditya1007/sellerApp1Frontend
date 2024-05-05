import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <Layout>
    <div className='container nav-padd'>
    <div className="row home-div ">
      <div className="col" align="center">
        <div className="card" style={{ width: "18rem" }}>
        <img src='/images/add_prod.png' className="card-img-top" alt="add prod" />
        <div className="card-body">
          <h5 className="card-title">Add Product</h5>
          <p className="card-text">
           List your product, Provide title, description, features, pricing, images etc.
          </p>
          <Link to="/addProduct" className="btn btn-primary">
            Add Product Now
          </Link>
        </div>
      </div>
      </div>

      <div className="col" align="center">
      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/restock.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Restock Inventory</h5>
          <p className="card-text">
           Restock your inventory with your latest batch of products!
          </p>
          <Link to="/restock" className="btn btn-primary">
            Restock Now
          </Link>
        </div>
      </div>
      </div>

      <div className="col" align="center">
      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/ship_prod.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Ship Orders</h5>
          <p className="card-text">
            Manage, process orders, Dispatch and Ship orders, Update order status,.
          </p>
          <Link to="/Shiporder" className="btn btn-primary">
            Ship now
          </Link>
        </div>
      </div>
      </div>
    </div>
    
    </div>
    </Layout>
  )
}

export default Homepage