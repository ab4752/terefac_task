import React from 'react';

function Output({ jsonData, renderType }) {
  const renderJSONToHTML = (data) => {
    if (!data) return '';
    if (typeof data === 'object') {
      return Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {renderJSONToHTML(value)}
        </div>
      ));
    }
    return data.toString();
  };

  const renderJSONToMarkdown = (data, indent = 0) => {
    if (!data) return '';
    if (Array.isArray(data)) {
      return data.map((item) => `${' '.repeat(indent)}- ${renderJSONToMarkdown(item, indent + 2)}`).join('\n');
    } else if (typeof data === 'object') {
      return Object.entries(data)
        .map(([key, value]) => `${' '.repeat(indent)}- **${key}**: ${renderJSONToMarkdown(value, indent + 2)}`)
        .join('\n');
    }
    return data.toString();
  };

  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid #ddd',
        minHeight: '200px',
        overflow: 'auto',
        backgroundColor: '#f9f9f9',
        whiteSpace: 'pre-wrap'
      }}
    >
      {renderType === 'html' ? renderJSONToHTML(jsonData) : renderJSONToMarkdown(jsonData)}
    </div>
  );
}

export default Output;
