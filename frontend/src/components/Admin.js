import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>Message History</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
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
    <Link to="/"><button>back</button></Link>
    </div>
  );
};

export default Admin;
