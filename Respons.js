// src/components/Response.js
import React, { useState } from 'react';
import Select from 'react-select';

const Response = ({ data }) => {
    const [selectedOption, setSelectedOption] = useState([]);

    const options = [
        { value: 'alphabets', label: 'Alphabets' },
        { value: 'numbers', label: 'Numbers' },
        { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' }
    ];

    const getFilteredData = () => {
        if (!data) return null;

        return selectedOption.reduce((acc, option) => {
            acc[option.value] = data[option.value];
            return acc;
        }, {});
    };

    const filteredData = getFilteredData();

    return (
        <div>
            <Select
                isMulti
                options={options}
                onChange={setSelectedOption}
            />
            <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
    );
};

export default Response;
