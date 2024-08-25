// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onResponse }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jsonData = JSON.parse(input);
            const response = await axios.post('https://your-heroku-app.herokuapp.com/bfhl', jsonData);
            onResponse(response.data);
        } catch (e) {
            setError('Invalid JSON format or server error');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows="10"
                    cols="50"
                    placeholder='Enter JSON data like {"data":["A","B","c"]}'
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Form;
