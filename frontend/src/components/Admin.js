import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Admin.css";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        
        const response = await axios.get('http://localhost:8080/api/messages');
        setMessages(response.data);
    
      }
       catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className='admin-container'>
      <h2 className="admin-header">Message History</h2>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li key={index} className="message-card">
            <div>
              <strong>Product Name:</strong> {message.productName}
            </div>
            <div>
              <strong>Product Carbon Footprint:</strong> {message.productCarbonFootprint}
            </div>
            <div>
              <strong>Reference Period Start:</strong> {message.referencePeriodStart}
            </div>
            <div>
              <strong>Reference Period End:</strong> {message.referencePeriodEnd}
            </div>
          </li>
        ))}
      </ul>
    <Link to="/"><button className='btn btn-success'>back</button></Link>
    </div>
  );
};

export default Admin;
