import React from 'react';
import axios from 'axios';

const NotesList = ({ notes, refreshNotes }) => {
    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:5000/notes/${id}`);
        refreshNotes();
    };

    return (
        <ul>
            {notes.map((note) => (
                <li key={note._id}>
                    {note.content}
                    <button onClick={() => deleteNote(note._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;
