import React from 'react';
import ReactDOM from 'react-dom';


class CreateToDo extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            error: null
        }
    }
    handleCreate (e) {
        e.preventDefault();

        let createInput = this.refs.createInput;
        let task = createInput.value;
        let validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({error: validateInput});
            return;
        }
        this.setState({error: null});
        this.props.createTask(task);
        this.refs.createInput.value = "";
    }
    returnError () {
        if (!this.state.error) {
            return  null;
        } else {
            return (
                <div style={{color:"red"}}> {this.state.error} </div>
            )
        }
    }
    validateInput (taskName) {
        if (!taskName) {
            return "Please enter a task"
        } else if (this.props.tasks.find(el => el.task === taskName)) {
            return "Task already exists"
        } else {
            return null;
        }
    }
    render () {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="add task to do" ref="createInput"/>
                <button> Add task </button>
                {this.returnError()}
            </form>
        )
    }
}




export default  CreateToDo;
