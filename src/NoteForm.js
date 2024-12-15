import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ refreshNotes }) => {
    const [note, setNote] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/notes', { content: note });
        setNote('');
        refreshNotes();
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Take a note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
