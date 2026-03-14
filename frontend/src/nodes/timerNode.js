// frontend/src/nodes/timerNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || 1000);

    return (
        <BaseNode
            id={id}
            title="⏱ Timer"
            color="#6b21a8"
            inputs={[{ id: 'trigger' }]}
            outputs={[{ id: 'done' }]}
        >
            <label style={labelStyle}>
                <span style={subLabel}>Delay (ms)</span>
                <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(e.target.value)}
                    style={inputStyle}
                    min={0}
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