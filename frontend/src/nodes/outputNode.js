// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      color="#dc2626"
      inputs={[{ id: 'value' }]}
      outputs={[]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
        <span style={{ color: '#94a3b8', fontSize: '11px' }}>Name</span>
        <input
          type='text'
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={inputStyle} />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
        <span style={{ color: '#94a3b8', fontSize: '11px' }}>Type</span>
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)} style={inputStyle}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}

const inputStyle = {
  backgroundColor: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '6px',
  color: '#e2e8f0',
  padding: '4px 8px',
  fontSize: '12px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',  // ← yeh add karo
};