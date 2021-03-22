import React from 'react';
import swal from 'sweetalert';
import Storage from './storage';
import './shopping.css'
import img1 from './laptop.jpg'
import img2 from './laptop2.jpg'
import img3 from './laptop3.jpg'
import { withRouter } from 'react-router';



class Shopping extends React.Component {

  state={
    employeeid:"",
    password:"",
    value:" "

  }

  // static getaccountdetails(){

  //   let data={ 
  //     emp101:{firstname:"aaa",lastname:"aaa",employeeid:"emp101",email:"aaa@gmail.com",phno:"0000000000"}
  //   }
  //   return data;
  // }

  onempidchange=(event)=>{

    this.setState({employeeid:event.target.value});
  }

  onpasswordchange=(event)=>{

    this.setState({password:event.target.value});
  }
 
 
 
  onlogin=(event)=>{

    let empid=this.state.employeeid;
    let pwd=this.state.password;



    event.preventDefault();
    let data=Storage.getaccountdetails();

    var a = data.employeeid.indexOf(empid);
    var cpwd=data.pass[a];

    if(pwd==cpwd)
    {
      swal("LOGIN SUCCESSFULL"+"\n\nEmployee Details\n\n"+
      
      "employee-id: "+data.employeeid[a]+
        "\nemail : "+data.email[a]+
        "\nphno : "+data.phno[a]+
        "\nlname : "+data.lastname[a] );

    }
    else{
      swal("LOGIN FAILED"+"\n\n False password")
    }

  }

  
  setvalue=()=>{

    this.setState({value:"laptop"});
    Storage.currentlaptop(this.state.value);

  }

  setvalue2=()=>{
      this.setState({value:"laptop2"});
      Storage.currentlaptop(this.state.value);
  }

  setvalue3=()=>{
      this.setState({value:"laptop3"})
      Storage.currentlaptop(this.state.value)
  }

  getstate=()=>{
    
    let value=Storage.returncurrentlaptop();
    setTimeout(()=>window.location.href="/details")
  
  }


   
    render() {
      return (
        
          <div className="wrapper">

            <div className="title">
            <p className="Title"><b>SELECT YOUR ITEMS</b></p>
            </div>

                <table>
                        <tr>
                        <th>
                            <div className="card1" >
                                <h4>Acer Preadator Helios 300</h4>
                                <img src={img1} />
                                <br></br>
                                <button  onClick={this.setvalue} >SELECT ITEM</button>

                                
                            </div>
                        </th>
                        <th>
                        <div className="card1" >
                                <h4>ASUS ROG Strix G</h4>
                                
                                <img src={img2}></img>
                                <br></br>
                                <button onClick={this.setvalue2} >SELECT ITEM</button>

                                
                            </div>
                        </th>

                        <th>
                        <div className="card1" >
                                <h4>Dell Alienware (17-Inch)</h4>
                                <img src={img3}></img>
                                <br></br>
                                <button onClick={this.setvalue3}>SELECT ITEM</button>

                                
                            </div>
                        </th>
                        
                        </tr>
                </table>


                <button onClick={this.getstate}>VIEW</button>
           

        </div>

        
      );
    }
  }

export default withRouter(Shopping);