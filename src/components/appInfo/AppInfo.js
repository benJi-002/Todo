import {useContext} from 'react';

import { dataContext } from '../../contexts/contexts';

import './appInfo.css';

const AppInfo = () => {

    const context = useContext(dataContext);

    const tasks = context.data.length;
    const completed = context.data.filter(item => item.completed).length;

    return (
        <div className="app-info">
            <h1>Список задач</h1>
            <h2>Общее число задач: {tasks}</h2>
            <h2>Задач выполнено: {completed}</h2>
        </div>
    );
}

export default AppInfo;