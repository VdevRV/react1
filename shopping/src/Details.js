import React from 'react';
import swal from 'sweetalert';
import Storage from './storage';
import './shopping.css'
import img1 from './laptop.jpg'
import img2 from './laptop2.jpg'
import img3 from './laptop3.jpg'
import img4 from './acer.jpg'
import img5 from './img5.jpg'
import img6 from './asus.jpg'

let currentlaptop="",img,imglogo
let namearray=[]
let pricearray=[]

class Details extends React.Component {

  state={
    laptopname:"",
    os:"",
    pro:"",
    ram:"",
    ssd:"",
    closp:"",
    cores:"",
    display:"",
    refresh:"",
    cost:1

  }



  onchange=(event)=>{

    this.setState({employeeid:event.target.value});
  }

  

  addtoarray=()=>{


    namearray.push(this.state.laptopname);
    pricearray.push(this.state.cost);
    

    localStorage.setItem("namearr",JSON.stringify(namearray));
    localStorage.setItem("costarr",JSON.stringify(pricearray));
  }





  componentDidMount=()=>{

      currentlaptop=Storage.returncurrentlaptop();
      if(currentlaptop=="laptop")

      
      { 
        img=img1;
        imglogo=img4;
        let data=Storage.systemDetails();
        
        // this.setState({laptopname:Storage.systemDetails.laptopname[0]});
        this.setState({laptopname:data.laptopname[0]});
        this.setState({os:data.os[1]});
        this.setState({pro:data.pro[0]});
        this.setState({ram:data.ram[0]});
        this.setState({ssd:data.ssd[0]});
        this.setState({closp:data.closp[0]});
        this.setState({cores:data.cores[0]});
        this.setState({display:data.display[0]});
        this.setState({refresh:data.refresh[0]});
        this.setState({cost:data.cost[0]});
        
       
      }
      else if(currentlaptop=="laptop2")
      {

        
        img=img2;
        imglogo=img6;
        let data=Storage.systemDetails();

        this.setState({laptopname:data.laptopname[1]})
        this.setState({os:data.os[1]});
        this.setState({pro:data.pro[1]});
        this.setState({ram:data.ram[1]});
        this.setState({ssd:data.ssd[1]});
        this.setState({closp:data.closp[1]});
        this.setState({cores:data.cores[1]});
        this.setState({display:data.display[1]});
        this.setState({refresh:data.refresh[1]});
        this.setState({cost:data.cost[1]});
        
      }

      else if(currentlaptop=="laptop3"){


        img=img3;
        imglogo=img5
        let data=Storage.systemDetails();
        this.setState({laptopname:data.laptopname[2]});
        this.setState({os:data.os[2]});
        this.setState({pro:data.pro[2]});
        this.setState({ram:data.ram[2]});
        this.setState({ssd:data.ssd[2]});
        this.setState({closp:data.closp[2]});
        this.setState({cores:data.cores[2]});
        this.setState({display:data.display[2]});
        this.setState({refresh:data.refresh[2]});
        this.setState({cost:data.cost[2]});
        
        
      }
      else{

        swal("Enter item")

      }
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

                            <div className="card4" >
                                <h4 >{this.state.laptop}</h4>
                                <img src={img} />
                                <h4 >{this.state.laptopname}</h4>
                                <br></br>
                             
                                
                            </div>

                            </th>

                            <th>

                            <div className="card2" >
                                <h4 >Product Name :  {this.state.laptopname}</h4>
                                <p> Operating System :  {this.state.os}<br></br>
                                    Processor :  {this.state.pro} <br></br>
                                    RAM :  {this.state.ram}<br></br>
                                    Refresh Rate :  {this.state.refresh}<br></br>
                                    SSD :  {this.state.ssd} <br></br>
                                    Clock-speed :  {this.state.closp} <br></br>
                                    Cores :  {this.state.cores} <br></br>
                                    Display :  {this.state.display}<br></br>
                                    Cost  : Rs {this.state.cost}<br></br>
                                    </p>
                                <br></br>
                                <button onClick={this.addtoarray}>ADD TO CART</button>
                                <button onClick={this.printarray}>get</button>
                                
                            </div>

                            </th>

                            <th>

                                <div className="card3" >
                                <img src={imglogo} />
                                <br></br>
    
                            </div>

                            </th>
                






                            
                            </tr>
                           

                       
                </table>

           

        </div>

        
      );
    }
  }

export default Details;