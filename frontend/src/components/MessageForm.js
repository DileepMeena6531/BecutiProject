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
      <form onSubmit={handleSubmit} className='col-5 offset-4'>
        <h1>Form</h1>
        <div className='mb-3'>
          <label for="productName" className="form-label">Product Name:</label>
          <input type="text" value={productName} className="form-control" onChange={(e) => setProductName(e.target.value)} id="productName" aria-describedby="emailHelp" required />
        </div>

        <div className='mb-3'>
          <label for="productCarbon" className="form-label">Product Carbon Footprint:</label>
          <input type="text" className="form-control" id="productCarbon" aria-describedby="emailHelp" value={productCarbonFootprint} onChange={(e) => setProductCarbonFootprint(e.target.value)} required />
        </div>

        <div className='mb-3'>
          <label for="referenceStart" className="form-label">Reference Period Start:</label>
          <input type="date" className="form-control" id="referenceStart" aria-describedby="emailHelp" value={referencePeriodStart} onChange={(e) => setReferencePeriodStart(e.target.value)} required />
        </div>

        <div className='mb-3'>
          <label for="referenceEnd" className="form-label">Reference Period End:</label>
          <input type="date" className="form-control" id="referenceEnd" aria-describedby="emailHelp" value={referencePeriodEnd} onChange={(e) => setReferencePeriodEnd(e.target.value)} required />
        </div>
        <div>
        <button type="submit" class="btn btn-primary">Send Message</button>
        <Link to="/Admin"><button className='btn btn-success ms-2'>History</button></Link>
        </div>
      </form>

    </>
  );
};

export default MessageForm;
