import React, { useState } from 'react';
import ApiInput from './components/ApiInput';
import JsonEditor from './components/JsonEditor';
import RenderOptions from './components/RenderOptions.js';
import Output from './components/Output';
import StatusMessage from './components/StatusMessage';

function App() {
  const [apiUrl, setApiUrl] = useState('');
  const [jsonData, setJsonData] = useState(null);
  const [jsonText, setJsonText] = useState('');
  const [renderType, setRenderType] = useState('html');
  const [statusMessage, setStatusMessage] = useState('');

  const fetchJsonData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setJsonData(data);
      setJsonText(JSON.stringify(data, null, 2));
      setStatusMessage('Data retrieved successfully!');
    } catch (error) {
      setStatusMessage(`Failed to retrieve data. ${error.message}`);
    }
  };

  const handleJsonChange = (text) => {
    setJsonText(text);
    try {
      const parsedJson = JSON.parse(text);
      setJsonData(parsedJson);
      setStatusMessage('');
    } catch (error) {
      setStatusMessage('Invalid JSON format.');
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>JSON API Viewer and Converter</h1>
      <ApiInput apiUrl={apiUrl} setApiUrl={setApiUrl} fetchJsonData={fetchJsonData} />
      <StatusMessage message={statusMessage} />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <JsonEditor jsonText={jsonText} onChange={handleJsonChange} />
        <div style={{ flex: 1 }}>
          <RenderOptions renderType={renderType} setRenderType={setRenderType} />
          <Output jsonData={jsonData} renderType={renderType} />
        </div>
      </div>
    </div>
  );
}

export default App;
