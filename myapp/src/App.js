import React, { Component } from 'react'
import  './App.css'
 
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newvalue:" ",
      newItem:"",
      list:[]

    }
  }

  updateInput(key, value){

    this.setState({
      [key]: value
    });
  }




  addItem(){

    const newItem={
      id:1 +Math.random(),
      value: this.state.newItem.slice()
    };


    const list =[...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:" "
    });

  }

  deleteItem(id){
    
    

    const list =[...this.state.list];

    const updatedList =list.filter(item => item.id !== id);

    this.setState({list: updatedList});


  }
  
  EditItem(id,index){
    
    //alert(this.state.list[0].id+"  "+id)

    // const list =[...this.state.list];

    // const updatedList =list.filter(item => item.id == id);

     alert(this.state.list[index].value);

     this.setState({
      
      });
  

      
    
  }

  handleChange(event) {
    this.setState({newvalue: event.target.value})
  }


  render(){
  return (
    <div className="App">
      
      ADD an Item...
      <br/>

      <input type="text" placeholder="Type item here..." value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}></input>
      <button onClick={()=>this.addItem()}>addItem</button>
     
      <br />
      <ul>
        {this.state.list.map((item,index) =>{
          return(
            <table >
              <tr>
                <td> <li key={item.id}><input type="text"  onChange={this.handleChange} value={item.value} ></input> 
                  <button onClick={() =>this.deleteItem(item.id)}>delete</button> 
                  <button onClick={() =>this.EditItem(item.id,index)}>Submit</button>  </li></td>
  

              </tr>
            </table>
            // <li key={item.id}>{item.value}
            //   <button onClick={() =>this.deleteItem(item.id)}>delete</button>
            // </li>
          )
        })}
      </ul>
    </div>
  );
}

}

export default App;
