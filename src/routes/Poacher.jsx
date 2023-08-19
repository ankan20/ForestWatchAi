import React, { useState } from "react";
import "./Poacher.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Poacher() {
  const [imagePreview, setImagePreview] = useState(null);
  const [base64Url, setBase64Url] = useState(null);
  const [resData, setresData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setBase64Url(reader.result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSubmit = async () => {
    try {
      if (!base64Url) {
        console.log('No image selected.');
        return;
      }
      
      setLoading(true);
      const res = await fetch('https://forestwatchai.onrender.com/mldetector', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagedata: base64Url }),
      });

      setLoading(false);
      
      if (!res.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await res.json();
      if (!data) {
        throw new Error(res.error);
      } else {
        setresData(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar/>
    <div className="poacher-main">
     
      <h1 style={{ fontSize: 50 }}>Poacher Detection</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && (
        <div>
          <h2 style={{ fontSize: 30 }}>Preview:</h2>
          <img style={{ width: 400, height: 400 }} src={imagePreview} alt="Uploaded" />
          <button onClick={imageSubmit}>Submit Image</button>
        </div>
      )}
      {isLoading && (
        <div className="loading-spinner"></div>
      )}
      {base64Url && !isLoading && (
        <div>
          <h2>Response From ML API:</h2>
          <p style={{ color: "white", fontWeight: 500, fontSize: 20 }}>The given photo is {resData}</p>
          
        </div>
         
      )}
    </div>
       <Footer/>
      </>
  );
}

export default Poacher;
