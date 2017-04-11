import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
           isEditing: false
        }
    }
    onEditClick () {
        this.setState( {
            isEditing: true
        });
    }
    onCancelClick () {
        this.setState( {
            isEditing: false
        });
    }
    renderAction () {
        if (this.state.isEditing) {
            return (
                <div>
                    <button onClick={this.saveTask.bind(this)}> Save </button>
                    <button onClick={this.onCancelClick.bind(this)}> Cancel </button>
                </div>
            )
        } else {
              return (
                <div>
                    <button onClick={this.onEditClick.bind(this)}> Edit </button>
                    <button onClick={this.onDeleteClick.bind(this)}> Delete </button>
                </div>
            )
        }
    }
    saveTask (e) {
        e.preventDefault();

        let oldTask = this.props.task;
        let newTask = this.refs.inputEdited.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false})
    }
    onDeleteClick () {
        let task = this.props.task;
        this.props.onDeleteClick(task);
    }
    renderTask () {
        let taskColor = {
            color: this.props.task.isCompleted? "green" : "red",
            cursor: "pointer"
        };
        if (this.state.isEditing) {
            return (
                <div>
                    <form onSubmit={this.saveTask.bind(this)}>
                        <input type="text" defaultValue={this.props.task.task} ref="inputEdited" />
                    </form>
                </div>
            )
        }
        return (
            <p style={taskColor}
                onClick={this.props.toggleTask.bind(this, this.props.task)}
            > {this.props.task.task} </p>
        )
    }
    render () {
        return (
            <div>
                {this.renderTask()}
                {this.renderAction()}
            </div>
        )
    }
}



export default TodoItem;
