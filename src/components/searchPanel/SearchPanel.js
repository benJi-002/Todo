import { useState, useContext } from 'react';

import { dataContext } from '../../contexts/contexts';

import './searchPanel.css';

const SearchPanel = (props) => {

    const context = useContext(dataContext);

    const [searshInput, setSearchInput] = useState ({
        term: ''
    });

    const onUpdateSearchLocal = (e) => {

        const term = e.target.value;
        setSearchInput({term: term});
        context.onUpdateSearch(term);
    }
    
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти задачу" 
            value={searshInput.term}
            onChange={onUpdateSearchLocal}
        />
    );
}

export default SearchPanel;