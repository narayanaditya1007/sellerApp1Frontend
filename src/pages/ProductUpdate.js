import React from 'react'
import { useState} from "react";
import Layout from '../components/layout/Layout'
import { useLocation} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const ProductUpdate = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const productObj  = (location.state) || {};
  console.log("uubu", location.state);

  const [title, setTitle] = useState(productObj?.name);
  const [description, setDescription] = useState(productObj?.description);
  const [price, setPrice] = useState(productObj.price);
  const [quantity, setQuantity] = useState(productObj.quantity);
  const [photo, setPhotos] = useState(productObj.images);

  return (
  <Layout>
    
    <div className="container nav-padd">
      <h4 className='heading'> Update Product</h4>
      <Form onSubmit={
        async (event) => {
          event.preventDefault();
          console.log(title, description, price, quantity, photo);

          try{
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/`,{
              method: "PUT",
              body: JSON.stringify({
                productId: productObj._id,
                name: title,
                description: description,
                // seller_id: UserId,
                price: price,
                images: photo,
                quantity: quantity,
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
          navigate("/restock")
        }}
      >
      <div className="mb-3">
        <label htmlFor="ProductformTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="ProductformTitle"
          placeholder="Enter product title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ProductformDesc" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="ProductformDesc"
          rows={3}
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ProductformPrice" className="form-label">
          Price
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">₹</span>
          </div>
          <input
            type="number"
            placeholder="Enter product price"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="ProductformImages" className="form-label">
          Upload Images
        </label>
        <input
          className="form-control"
          type="file"
          id="formFileMultiple"
          accept="image/*"
          multiple
          onChange={(e) => setPhotos(e.target.files)}
          defaultValue={[]}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ProductformQuantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          placeholder="Enter Quantity of the Product"
          className="form-control"
          min="0"
          aria-label="Quantity in number"
          defaultValue={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div class="col-12">
        <button class="btn btn-primary btn-submit" type="submit" >Submit</button>
      </div>

      </Form>
    </div>
  </Layout>
  )
}

export default ProductUpdate