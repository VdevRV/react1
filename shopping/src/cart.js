import React from 'react';


var retrievedData = localStorage.getItem("namearr");
let namearra=JSON.parse(retrievedData);

var retrievedData1=localStorage.getItem("costarr");
let costarra=JSON.parse(retrievedData1);

class Cart extends React.Component {




     
      render() {
        return (
          
            <div className="wrapper">
  
              <div className="title">
              <p className="Title"><b>YOUR CART</b></p>


              <table>
                  <tr>
                      <th>Productname</th>
                      <th> Price</th>
                  </tr>

                    <td>
                    {
                        namearra.map((ele)=>{
                        return(
                        <tr>{ele}</tr>
                            );
                        })
                    }
                        
                    </td>

                    <td>
                    {
                        costarra.map((ele)=>{
                        return(
                        <tr>{ele}</tr>
                            );
                        })
                    }
                        
                    </td>
              </table>
              </div>
             
  
          </div>
  
          
        );
      }
    }
  
  export default Cart;