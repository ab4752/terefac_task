import React from 'react';

function ApiInput({ apiUrl, setApiUrl, fetchJsonData }) {
  return (
    <div>
      <input
        type="text"
        value={apiUrl}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder="Enter API Endpoint"
        style={{ width: '300px', marginRight: '10px' }}
      />
      <button onClick={fetchJsonData}>GET</button>
    </div>
  );
}

export default ApiInput;
