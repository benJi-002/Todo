import './employeesListItem.css';

const EmployeesListItem = (props) => {
    
    const {task, onDelete, onToggleProp, completed} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (completed) {
        classNames += ' completed';
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
            >

                {task}

            </span>

            <div className="d-flex justify-content-center align-items-center">
                
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="completed"
                >

                    <i className="fas fa-cookie"></i>

                </button>    

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}
                >

                    <i className="fas fa-trash"></i>

                </button>
            </div> 
        </li>
    );
}

export default EmployeesListItem;