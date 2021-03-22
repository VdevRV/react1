import './App.css'


 import {
  BrowserRouter,
   Link,
   Switch,
   Route
 } from "react-router-dom";

import Register from './register'
import Login from './login'
import Shopping from './shopping'
import Details from './Details'
import Cart from './cart'

function App()
{
  return(
    <div className="App">
      <BrowserRouter>
      <div>
            <Link to="/register">Register</Link>
            
            <Link to="/login"> Login</Link>

            <Link to="/shopping"> Shopping</Link>

            <Link to="/details"> Details</Link>
            
            <Link to="/cart"> Cart</Link>


      </div>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/shopping"><Shopping /></Route>
        <Route exact path="/details"><Details /></Route>
        <Route exact path="/cart"><Cart /></Route>
      </Switch>
      

      </BrowserRouter>
    </div>
  )
}

export default App;