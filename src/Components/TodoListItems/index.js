import React, { Component } from 'react'
import './styles.css'

 const TotoListItems =(props) =>{
   const {items, deleteItem} = props;
   const length = items.length;
        const listItems = length ? (
            items.map(item => {
                return(
                    <div key={item.id}>
                        <span className='task'> {item.task}  </span>
                         <span  className='action icon' onClick={()=> deleteItem(item.id)} > &times;  </span>
                    </div>
                )
            })
        ): (
            <p> There is no Items</p>
        )

        return (
         <div className='listItems'>    
            <span className='task title'>Tasks</span>
             <span className='action title'>Action</span>
             
                {listItems}
          </div>
        )
    }

export default TotoListItems;