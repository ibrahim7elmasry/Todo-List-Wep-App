import React, { Component } from 'react'
import TodoListItems from './Components/TodoListItems'
import TodoListAdd from './Components/TodoListAdd'

export default class App extends Component {
  state ={
    items : [
      {id:1, task:'Studying'},
      // {id:2, name:'Ahmed', age:30},
      // {id:3, name:'Hussein', age:40},
    ]
  }
  deleteItem =(id) =>{
  // let items = this.state.items;
  // let index = items.findIndex(item => item.id === id);
  // items.splice(index, 1)
  // // this.setState({ items:items})
  // this.setState({items})


  let items = this.state.items.filter(item=> {
    return item.id !== id
  })

  this.setState({items})
  }


addItem =(item) =>{
  item.id = Math.random()
  let items = this.state.items;
  items.push(item);
  this.setState({
    items
  })
}

  render() {
    return (
      <div className='App container'>
      <h1 className='text'>  Todo List</h1>
       
        <TodoListItems items={this.state.items}  deleteItem={this.deleteItem}/>
        <TodoListAdd addItem={this.addItem}/>
      </div>
    )
  }
}
