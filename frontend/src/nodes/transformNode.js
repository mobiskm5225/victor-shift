// frontend/src/nodes/transformNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
    const [fn, setFn] = useState(data?.fn || 'value.toUpperCase()');

    return (
        <BaseNode
            id={id}
            title="🔄 Transform"
            color="#065f46"
            inputs={[{ id: 'input' }]}
            outputs={[{ id: 'output' }]}
        >
            <label style={labelStyle}>
                <span style={subLabel}>Function</span>
                <input
                    type="text"
                    value={fn}
                    onChange={(e) => setFn(e.target.value)}
                    style={inputStyle}
                    placeholder="e.g. value.toUpperCase()"
                />
            </label>
        </BaseNode>
    );
};

const inputStyle = {
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '6px',
    color: '#e2e8f0',
    padding: '4px 8px',
    fontSize: '12px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
};

const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '8px',
};

const subLabel = {
    color: '#94a3b8',
    fontSize: '11px',
};