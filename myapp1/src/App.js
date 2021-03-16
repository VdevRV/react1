
import './App.css';
import React from 'react'

class App extends React.Component {


  state ={
    newItem:"",
      list:[]
  }

  updateInput(key, value){

    this.setState({
      [key]: value
    });
  }



  render(){

    return (
      <div className="App">
        <p>Counter : {this.state.counter}</p>
        <button className="btn" onClick={this.increment}>increment</button>
        <button className="btn1" onClick={this.decrement}>decrement</button>
 
      </div>
    );
  }

  }


export default App;
