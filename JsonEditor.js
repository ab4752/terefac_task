import React from 'react';

function JsonEditor({ jsonText, onChange }) {
  return (
    <div style={{ flex: 1, marginRight: '10px' }}>
      <h3>JSON Data (Editable)</h3>
      <textarea
        value={jsonText}
        onChange={(e) => onChange(e.target.value)}
        rows="20"
        style={{ width: '100%', fontFamily: 'monospace' }}
      />
    </div>
  );
}

export default JsonEditor;
