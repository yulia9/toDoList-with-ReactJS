import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import CreateToDo from './createToDo';


let tasks = [
    {
    task: 'make TODO',
    isCompleted: true,
    },
    {
    task: 'make hello',
    isCompleted: false,
    }
];

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            tasks: tasks
        }
    }
    createTask (task) {
        this.state.tasks.push({
            task: task,
            isCompleted: false
        });
        this.setState( {tasks: this.state.tasks})
    }
    toggleTask (task) {
        let index = this.state.tasks.indexOf(task);
        this.state.tasks[index].isCompleted = !this.state.tasks[index].isCompleted;
        this.setState( {tasks: this.state.tasks})
    }
    saveTask (oldTask, newTask) {
        let index = this.state.tasks.indexOf(oldTask);
        this.state.tasks[index].task = newTask;
        this.setState( {tasks: this.state.tasks})
    }
    onDeleteClick (task) {
        let index = this.state.tasks.indexOf(task);
        this.state.tasks.splice(index, 1);
        this.setState( {tasks: this.state.tasks});
    }
    render () {
        return (
            <div>
                <h1> To Do List </h1>
                    <CreateToDo tasks={this.state.tasks} createTask={this.createTask.bind(this)}/>
                    <TodoList tasks={this.state.tasks}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    onDeleteClick={this.onDeleteClick.bind(this)}
                    />
            </div>
        )
    }
}


export default App;

