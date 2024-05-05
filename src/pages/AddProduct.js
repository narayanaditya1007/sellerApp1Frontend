import React from 'react'
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../components/layout/Layout'
import Form from 'react-bootstrap/Form';

const AddProduct = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [files, setFiles] = useState({});
  const [photo, setPhotos] = useState([]);
  const [image_url, setImageUrl] = useState([]);

  return (
  <Layout>
    
    <div className="container nav-padd">
      <h4 className='heading'> Add Product</h4>
      <Form 
      onSubmit={
        async (event) => {
          event.preventDefault();
          for (let i = 0; i < files.length; i++) {
            let file = files.item(i)
            await setPhotos(photo => {
              // console.log("mm", i, photo);
              return [...photo, file];
            });
            console.log("k", i, photo);
          }
          console.log(title, description, price, quantity, photo);
    
          try{

            const image_url_arr = await Promise.all(photo?.map(async (photoObj)=>{
            
              const img_data = new FormData();
              img_data.append("file",photoObj);
              img_data.append("upload_preset", "ondc-miniProj");
              img_data.append("cloud_name","djzixt937");

              console.log("img data",img_data);
              const res1 = await fetch("https://api.cloudinary.com/v1_1/djzixt937/image/upload",{
                method:"post",
                body: img_data
              })

              const res2 = await res1.json();
              return res2.url;
            }));

            console.log("imag url",image_url_arr);
            await setImageUrl(image_url_arr);

            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/`,{
            method: "POST",
            body: JSON.stringify({
              name: title,
              desc: description,
              // seller_id: UserId,
              price: price,
              images: image_url,
              quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include'
          })

          const contentType = res.headers.get("content-type")
          if (contentType && contentType.indexOf("application/json") !== -1){
            const user = await res.json();
            console.log(user);
            navigate('/');
          }
          else{
            const text = await res.text();
            console.log(text);
          }
          }catch(err){
            console.log(err);
          }

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
          onChange={(e) => {
            setFiles(e.target.files)}}
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
          defaultValue="0"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="col-12">
        <button className="btn btn-primary btn-submit" type="submit" >Submit</button>
      </div>

      </Form>
    </div>
  </Layout>
  )
}

export default AddProduct