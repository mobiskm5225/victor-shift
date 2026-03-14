// frontend/src/nodes/textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return [...vars];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const textareaRef = useRef(null);

  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.max(80, textareaRef.current.scrollHeight + 80);


      const lines = currText.split('\n');
      const longestLine = lines.reduce((a, b) => a.length > b.length ? a : b, '');
      const newWidth = Math.max(200, longestLine.length * 8 + 40);

      setNodeSize({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      color="#0f766e"
      inputs={[]}
      outputs={[]}
      style={{ width: nodeSize.width, minHeight: nodeSize.height }}
    >
      {/* Textarea */}
      <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ color: '#94a3b8', fontSize: '11px' }}>Text</span>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '6px',
            color: '#e2e8f0',
            padding: '6px 8px',
            fontSize: '12px',
            outline: 'none',
            width: '100%',
            resize: 'none',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        />
      </label>

      {/* Dynamic Input Handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) / (variables.length + 1)) * 100}%`,
            background: '#5eead4',
            width: '10px',
            height: '10px',
            border: '2px solid #1e293b',
          }}
        />
      ))}

      {/* Static Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: '50%',
          background: '#94a3b8',
          width: '10px',
          height: '10px',
          border: '2px solid #1e293b',
        }}
      />
    </BaseNode>
  );
};