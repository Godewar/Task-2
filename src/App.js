import React, { useEffect, useState } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import axios from 'axios';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:5000/notes');
        setNotes(response.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h1>Notes</h1>
            
            <NoteForm refreshNotes={fetchNotes} />
            <NotesList notes={notes} refreshNotes={fetchNotes} />
        </div>
    );
};

export default App;
