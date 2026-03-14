// llmNode.js


import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      color='#7c3aed'
      inputs={[{ id: 'system' }, { id: 'prompt' }]}
      outputs={[{ id: 'response' }]}
    >
      <p style={{ margin: 0, color: '#94a3b8', fontSize: '12px' }}>
        This is a LLM.
      </p>
    </BaseNode>
  );
}
