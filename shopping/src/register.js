import React from 'react';
import swal from 'sweetalert';
import Storage from './storage';
import './register.css';
// import { withRouter } from 'react-router';


class Register extends React.Component {

  state={
    lastname:"",
    password:"",
    cpassword:"",
    employeeid:"",
    email:"@gmail.com",
    phno:"",

  }

  // static getaccountdetails(){

  //   let data={ 
  //     emp101:{firstname:"aaa",lastname:"aaa",employeeid:"emp101",email:"aaa@gmail.com",phno:"0000000000"}
  //   }
  //   return data;
  // }


  onpasswordchange=(event)=>{

    this.setState({password:event.target.value});
  }
  oncpasswordchange=(event)=>{

    this.setState({cpassword:event.target.value});
  }
  onempidchange=(event)=>{

    this.setState({employeeid:event.target.value});
  }

 
  onlastnamechange=(event)=>{

    this.setState({lastname:event.target.value})
  }

  onemailchange=(event)=>{

    this.setState({email:event.target.value})
  }
  onphnochange=(event)=>{

    this.setState({phno:event.target.value})
  }

  onsubmit=(event)=>{

    event.preventDefault();
    let empid=this.state.employeeid
    let lname=this.state.lastname;
    let email=this.state.email;
    let phno=this.state.phno;
    let pass=this.state.password;
    let cpass=this.state.cpassword;

    if(pass===cpass){
      swal("registration  successfull"+empid);
      Storage.adduser(empid,lname,email,phno,pass);
      // setTimeout(()=>window.location.href="/login",2000)
    }

    else{
      swal(" Registration Failed");
    }
    
   
 

  }


   
    render() {
      return (
        
          <div className="wrapper">

            <div className="title">
            <p className="Title"><b>REGISTRATION FORM</b></p>
            </div>

            <form onSubmit={this.onsubmit}>



            <input type="text" placeholder="Employee ID " onChange={this.onempidchange} value={this.state.employeeid} className="employee-id" ></input>
            <br/>
            <small>*enter employee id</small>
            <br/>
            <br/>

            {/* <input type="text" placeholder="First Name" onChange={this.onfirstnamechange} value={this.state.firstname}  className="first-name" ></input>
            <br/>
            <small>*enter first  name</small>
            <br /><br/> */}
            <input type="text" placeholder="Your Name" onChange={this.onlastnamechange} value={this.state.lastname} className="last-name"></input>
            <br></br>
            <small>*enter name</small>

            <br /><br/>
            <input type="email" placeholder="example@gmail.com" onChange={this.onemailchange} value={this.state.email} className="email"></input>
            <br></br>
            <small>*email here</small>


            <br /><br/>
            <input type="text" placeholder="phonenumber" onChange={this.onphnochange} value={this.state.phno} className="ph-num"></input>
            <br></br>
            <small>*phone-num</small>

            <br /><br/>
            <input type="password" placeholder="password" onChange={this.onpasswordchange} value={this.state.password}></input>
            <br></br>
            <small>*enter a password</small>

            <br /><br/>
            <input type="Password" placeholder="confirm password" onChange={this.oncpasswordchange} value={this.state.cpassword}></input>
            <br></br>
            <small>*confirm password</small>

            <br /><br/>
            <button type="submit" className="btn"  > SUBMIT</button>


            </form>

           

        </div>

        
      );
    }
  }

export default Register;