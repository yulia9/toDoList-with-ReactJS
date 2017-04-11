import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';


class TodoList extends React.Component {

    renderTasks () {

        let toggle = this.props.toggleTask;
        let saveTask = this.props.saveTask;
        let onDeleteClick = this.props.onDeleteClick;

        return this.props.tasks.map(function (task, index) {
            return <TodoItem key={index} task={task} toggleTask={toggle} saveTask={saveTask} onDeleteClick={onDeleteClick}/>
        })
    }
    render() {
          return (
            <div>
                <h4> Task name </h4>
                <p> {this.renderTasks()} </p>
            </div>
        )
    }
}




export default TodoList;
