import React from 'react';

function RenderOptions({ renderType, setRenderType }) {
  return (
    <div>
      <h3>Output Options</h3>
      <label>
        <input
          type="radio"
          name="render-type"
          value="html"
          checked={renderType === 'html'}
          onChange={(e) => setRenderType(e.target.value)}
        />
        HTML
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="render-type"
          value="markdown"
          checked={renderType === 'markdown'}
          onChange={(e) => setRenderType(e.target.value)}
        />
        Markdown
      </label>
    </div>
  );
}

export default RenderOptions;
