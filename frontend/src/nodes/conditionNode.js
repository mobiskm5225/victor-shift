// frontend/src/nodes/conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || 'value > 0');

    return (
        <BaseNode
            id={id}
            title="⚡ Condition"
            color="#b91c1c"
            inputs={[{ id: 'input' }]}
            outputs={[{ id: 'true' }, { id: 'false' }]}
        >
            <label style={labelStyle}>
                <span style={subLabel}>Condition</span>
                <input
                    type="text"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    style={inputStyle}
                    placeholder="e.g. value > 0"
                />
            </label>

            <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                <span style={{ ...subLabel, textAlign: 'right' }}>true</span>
                <span style={{ ...subLabel, textAlign: 'right' }}>false</span>
            </div>
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