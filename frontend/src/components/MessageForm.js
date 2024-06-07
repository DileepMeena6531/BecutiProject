import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MessageForm = () => {
  const [productName, setProductName] = useState('');
  const [productCarbonFootprint, setProductCarbonFootprint] = useState('');
  const [referencePeriodStart, setReferencePeriodStart] = useState('');
  const [referencePeriodEnd, setReferencePeriodEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      productName,
      productCarbonFootprint,
      referencePeriodStart,
      referencePeriodEnd
    };

    try {
      await axios.post('http://localhost:8080/api/messages', message);
      setProductName('');
      setProductCarbonFootprint('');
      setReferencePeriodStart('');
      setReferencePeriodEnd('');
      alert('Message sent successfully');
    } catch (error) {
      console.error(error);
      alert('Error sending message');
    }
  };

  return (
    <>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} required />
      </div>
      <div>
        <label>Product Carbon Footprint:</label>
        <input type="text" value={productCarbonFootprint} onChange={(e)=>setProductCarbonFootprint(e.target.value)} required />
      </div>
      <div>
        <label>Reference Period Start:</label>
        <input type="date" value={referencePeriodStart} onChange={(e)=>setReferencePeriodStart(e.target.value)} required />
      </div>
      <div>
        <label>Reference Period End:</label>
        <input type="date" value={referencePeriodEnd} onChange={(e)=>setReferencePeriodEnd(e.target.value)} required />
      </div>
      <button type="submit">Send Message</button>
    </form>
    <Link to="/Admin"><button>History</button></Link>
    </>
  );
};

export default MessageForm;
