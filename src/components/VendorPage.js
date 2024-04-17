// src/components/VendorPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VendorPage = () => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    axios.get(`/api/vendors/${vendorId}`)
      .then(response => {
        setVendor(response.data);
      })
      .catch(error => console.error('Error fetching vendor details:', error));
  }, [vendorId]);

  return (
    <div>
      <h1>Vendor Profile</h1>
      {vendor ? (
        <div>
          <h2>{vendor.name}</h2>
          {/* Render more vendor details here */}
          <p>{vendor.description}</p>
        </div>
      ) : (
        <p>Loading vendor details...</p>
      )}
    </div>
  );
};

export default VendorPage;
