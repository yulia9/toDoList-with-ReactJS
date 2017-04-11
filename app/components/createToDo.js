import React from 'react';
import ReactDOM from 'react-dom';


class CreateToDo extends React.Component {

    handleCreate (e) {
        e.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = "";
    }
    render () {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="add task to do" ref="createInput"/>
                <button> Add task </button>
            </form>
        )
    }
}




export default  CreateToDo;
