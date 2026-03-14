// frontend/src/nodes/BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, color = '#1C2536', inputs = [], outputs = [], children, style = {} }) => {
    return (
        <div style={{
            minWidth: 200,
            minHeight: 80,
            border: '1px solid #334155',
            borderRadius: '10px',
            backgroundColor: '#1e293b',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            fontFamily: 'sans-serif',
            ...style
        }}>

            {/* Header */}
            <div style={{
                backgroundColor: color,
                padding: '6px 12px',
                borderRadius: '10px 10px 0 0',
                fontWeight: '600',
                fontSize: '13px',
                color: '#fff',
            }}>
                {title}
            </div>

            {/* Body */}
            <div style={{
                padding: '10px 12px',
                fontSize: '12px',
                color: '#cbd5e1',
            }}>
                {children}
            </div>

            {/* Input Handles - Left Side */}
            {inputs.map((input, index) => (
                <Handle
                    key={input.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${input.id}`}
                    style={{
                        top: inputs.length === 1
                            ? '50%'
                            : `${((index + 1) / (inputs.length + 1)) * 100}%`,
                        background: '#94a3b8',
                        width: '10px',
                        height: '10px',
                        border: '2px solid #1e293b',
                    }}
                />
            ))}

            {/* Output Handles - Right Side */}
            {outputs.map((output, index) => (
                <Handle
                    key={output.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${output.id}`}
                    style={{
                        top: outputs.length === 1
                            ? '50%'
                            : `${((index + 1) / (outputs.length + 1)) * 100}%`,
                        background: '#94a3b8',
                        width: '10px',
                        height: '10px',
                        border: '2px solid #1e293b',
                    }}
                />
            ))}

        </div>
    );
};