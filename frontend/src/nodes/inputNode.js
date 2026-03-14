// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode id={id} title="Input" color="#16a34a" inputs={[]} outputs={[{ id: 'value' }]}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
        <span style={{ color: '#94a3b8', fontSize: '11px' }}>Name</span>
        <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} style={inputStyle} />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
        <span style={{ color: '#94a3b8', fontSize: '11px' }}>Type</span>
        <select value={inputType} onChange={(e) => setInputType(e.target.value)} style={inputStyle}>
          <option value="Text" >Text</option>
          <option value="File">File</option>
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