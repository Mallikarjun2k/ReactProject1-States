import React from 'react';
import ListItems from './components/ListItems';
import './App.css'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
        
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
        
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
    
   
  }
 render(){
  return (
    
    <div className="App">
            <header>
              <form id="form" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter text...." value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                <button type="submit">Add</button>
              </form>
              <p>{this.state.items.text}</p>
              
                <ListItems items={this.state.items}  setUpdate={this.setUpdate}/>
              
            </header>

          </div>
          
    
  );
 }
}


export default App;