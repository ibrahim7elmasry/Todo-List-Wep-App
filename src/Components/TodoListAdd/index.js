import React, { Component } from 'react'
import './styles.css'

export default class TodoListAdd extends Component {
    state={
        task: '',
        age: ''
    }

handleChange =(e)=>{
    this.setState({
        [e.target.id] : e.target.value
    })
}

handleSubmit =(e)=>{
    e.preventDefault();
   if(e.target.task.value === '' ){
    return false;
   }else{
    this.props.addItem(this.state)
    this.setState({
        task:'',
        age: ''
    })
   }
}

    render() {
        return (
            <div>
           <form onSubmit={this.handleSubmit}>
               <input type='text' placeholder='Type New Task..' id='task' onChange={this.handleChange} value={this.state.task}/>
                <input style={{background:'#334b3f', color:'white'}} type='submit' value='Add'/>
           </form>
                
            </div>
        )
    }
}
