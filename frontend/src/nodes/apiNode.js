// frontend/src/nodes/apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');
    const [method, setMethod] = useState(data?.method || 'GET');

    return (
        <BaseNode
            id={id}
            title="API"
            color="#0369a1"
            inputs={[{ id: 'body' }]}
            outputs={[{ id: 'response' }]}
        >
            <label style={labelStyle}>
                <span style={subLabel}>Method</span>
                <select value={method} onChange={(e) => setMethod(e.target.value)} style={inputStyle}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </label>

            <label style={labelStyle}>
                <span style={subLabel}>URL</span>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={inputStyle}
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