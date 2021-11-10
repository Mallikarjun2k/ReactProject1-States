import React from 'react';



function ListItems(props){
  
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
        <h2> {item.text}</h2>
     </p>  
    </div>})
 
    return (
            <div>
              {listItems}
            </div>
            );
  }

export default ListItems;