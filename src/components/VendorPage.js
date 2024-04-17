// src/components/VendorPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const VendorPage = () => {
  const { vendorId } = useParams();
  // Fetch vendor details using vendorId
  // Example: useEffect(() => axios.get(`/api/vendors/${vendorId}`), [vendorId]);

  return (
    <div>
      <h1>Vendor Profile</h1>
      {/* Render vendor details and products they offer */}
    </div>
  );
};

export default VendorPage;
