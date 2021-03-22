import React from 'react';
import swal from 'sweetalert';
import Storage from './storage';
import './register.css'


class Login extends React.Component {

  state={
    employeeid:"",
    password:"",

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


   
    render() {
      return (
        
          <div className="wrapper">

            <div className="title">
            <p className="Title"><b>LOGIN</b></p>
            </div>

            <form onSubmit={this.onsubmit}>



            <input type="text" placeholder="Employee ID " onChange={this.onempidchange} value={this.state.employeeid} className="employee-id" ></input>
            <br/>
            <small>*enter employee id</small>
            <br/>
            <br/>

            <input type="password"   placeholder="Password "   onChange={this.onpasswordchange} value={this.state.password} ></input>
            <br/>
            <small>*password</small>
            <br/>
            <br/>


            <button className="btn" onClick={this.onlogin} >LOGIN </button>







            </form>

           

        </div>

        
      );
    }
  }

export default Login;