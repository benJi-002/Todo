import EmployeesListItem from '../employeesListItem/EmployeesListItem';

import './employeesList.css'

const EmployeesList = ({visibleData, onDelete, onToggleProp}) => {

    const elements = visibleData.map(item => {

        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;