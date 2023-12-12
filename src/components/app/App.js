//first commit


import { useState, useEffect } from 'react';

import AppInfo from '../appInfo/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import EmployeesList from '../employeesList/EmployeesList';
import EmployersAddForm from '../employeesAddForm/EmployeesAddForm';

import { dataContext } from '../../contexts/contexts';

import './app.css';


const App = () => {

    let commit = 1;
    let commit1 = commit;

    
    const {Provider} = dataContext;
    
    const [tasks, setTasks] = useState({
        data: [
            {task: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus explicabo labore aspernatur eos, mollitia quasi necessitatibus minima quas rerum, incidunt ullam beatae repellendus debitis quia rem consectetur ea architecto quis.' , completed: false, id: 1},
            // {task: 'Alex B.' , completed: false, id: 2},
            // {task: 'Benji L.', completed: false, id: 3}
        ],
        term: '',
        filterType: 'all',
        addTask: addTask,
        onUpdateSearch: onUpdateSearch,
        onFilterSelect: onFilterSelect
    }); 
    
    let maxId = 4;
    
    useEffect (() => {
        console.log(tasks)
    }, [tasks])

    function TodoModel(id, task) {
        return {
            task,
            completed: false,
            id
        }
    }

    const deleteTask = (id) => {

        setTasks({...tasks, 
            data: data.filter(item => item.id !== id)
        });
        
    }


    function addTask (task) {

        const newTask = new TodoModel(maxId, task);

        maxId++;

        const allTasks = [...tasks.data, newTask];

        setTasks((tasks) => ({...tasks, data: allTasks}));
    }


    const onToggleProp = (id, prop) => {

        setTasks({...tasks, 
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        });
    }

    const searchTask = (items, term) => {

        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.task.indexOf(term) > -1
        })
    }

    function onUpdateSearch(term) {
        setTasks({...tasks, term: term});
    }

    const filterTask = (items, filterType) => {

        switch (filterType) {
            case 'completed':
                return items.filter(item => item.completed);
            case 'unfulfilled':
                return items.filter(item => !item.completed);
            default:
                return items
        }
    }

    function onFilterSelect(filterType) {
        setTasks({...tasks, filterType: filterType});
    }

    const {data, term, filterType} = tasks; 

    const visibleData = filterTask(searchTask(data, term), filterType);

    return (
        <Provider value={tasks}>
            <div className="app">
                
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>

                    <AppFilter/>

                </div>

                <EmployeesList 
                    visibleData={visibleData} 
                    onDelete={deleteTask}
                    onToggleProp={onToggleProp}
                />

                <EmployersAddForm/>

            </div>
        </Provider>
    );
};

export default App;