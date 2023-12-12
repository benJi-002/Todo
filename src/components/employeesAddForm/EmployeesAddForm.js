import { useState, useContext } from 'react';

import { dataContext } from '../../contexts/contexts';

import './employeesAddForm.css'

const EmployersAddForm = () => {

    const context = useContext(dataContext);
   
    const [task, setTask] =  useState({
        taskText: ''
    });

    const onValueChange = (e) => {

        setTask({
            taskText : e.target.value
        })
    }

    const onSubmit = (e) => {

        e.preventDefault();
        if (task.taskText.length < 3) return;
        context.addTask(task.taskText);
        
        setTask({
            taskText: ''
        });

        // debugger
    }

    const {taskText} = task;

    return (
        <div className="app-add-form">

            <h3>Добавьте новую задачу</h3>

            <form
                className="add-form d-flex"
                onSubmit={onSubmit}
            >

                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name" 
                    value={taskText}
                    onChange={onValueChange}
                />

                <button type="submit"
                    className="btn btn-outline-light">
                        Добавить
                </button>
            </form>
        </div>
    );
}


export default EmployersAddForm;