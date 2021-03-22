

let data={ 
      lastname:["aaa","bbb"],
      employeeid:["emp1001","emp1002"],
      email:["aaa@gmail.com","bbb@gmail.com"],
      phno:["0000000000","1111111"],
      pass:["aaa","bbb"],
    }

let data2={
  laptopname:["Acer Preadator Helios 300","ASUS ROG Strix G","Dell Alienware (17-Inch)"],
  os:[,"Microsoft Windows 10 Home","Microsoft Windows 10 Home","Microsoft Windows 10 Home"],
  pro:["10-th gen intel core i7","10-th gen intel core i9","10-th gen intel core i9"],
  ram:["32 GB DDR4-2933","16 GB DDR4-2933","32 GB DDR4-2933"],
  ssd:["2TB Raid 0","2TB Raid 0","2TB Raid 0"],
  closp:["5.0GHz","4.0GHz","4.0GHz"],
  cores:["6 cores","6 cores","6 cores"],
  display:["17.3-inch IPS Panel","15.3-inch IPS Panel","15.3-inch IPS Panel"],
  refresh:["240Hz","240Hz","240Hz"],
  cost:[60000,80000,70000]
  
}





class Storage{

    static getaccountdetails(){

        return data;


      }

      static systemDetails(){
        return data2;
      }

     static adduser(employeeid,lastname,email,phno,pass){

            data.employeeid.push(employeeid);
            data.lastname.push(lastname);
            data.email.push(email);
            data.phno.push(phno);
            data.pass.push(pass);
     }


     static currentlaptop(laptop)
     {
        localStorage.setItem('currentlaptop',laptop)
        //currentlaptop=laptop;
     }
     static returncurrentlaptop(){
      
      
      var currentlaptop=localStorage.getItem('currentlaptop');
      return currentlaptop;
     }
    
}

export default Storage ;
