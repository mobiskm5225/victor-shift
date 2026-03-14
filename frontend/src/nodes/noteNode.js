import { useState } from "react";
import { BaseNode } from "./BaseNode";


export const NoteNode = ({ id, data }) => {
    const [note, setNote] = useState(data?.note || "Write your note here...")
    return (
        <BaseNode
            id={id}
            title="Note"
            color="#b45309"
            inputs={[]}
            outputs={[]}
        >
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} style={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '6px',
                color: '#e2e8f0',
                padding: '6px 8px',
                fontSize: '12px',
                outline: 'none',
                width: '100%',
                resize: 'vertical',
                boxSizing: 'border-box',
            }}>

            </textarea>
        </BaseNode>
    )
}