import { createContext } from "react";

const dataContext = createContext({
    data: [
        {task: 'John C.' , completed: false, id: 1},
        {task: 'Alex B.' , completed: false, id: 2},
        {task: 'Benji L.' , completed: false, id: 3}
    ],
    term: '',
    filterType: 'all',
    addTask: () => {},
    onUpdateSearch: () => {},
    onFilterSelect: () => {}
})

export {dataContext};