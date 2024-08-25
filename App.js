// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';

function App() {
    const [response, setResponse] = useState(null);

    return (
        <div className="App">
            <h1>BFHL API Frontend</h1>
            <Form onResponse={setResponse} />
            {response && <Response data={response} />}
        </div>
    );
}

export default App;
