import {useContext} from 'react';

import { dataContext } from '../../contexts/contexts';

import './appFilter.css'

const AppFilter = () => {

    const context = useContext(dataContext);
    
    const buttonsData = [
        {name: 'all', label: 'Все задачи'},
        {name: 'completed', label: 'Выполненные'},
        {name: 'unfulfilled', label: 'Невыполненные'}
    ];

    const buttons = buttonsData.map(({name, label}) => {

        const active = context.filterType === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => context.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter