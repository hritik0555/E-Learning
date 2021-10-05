
import React from "react";
import Dashboard from "./home/Dashboard";
import Signup from "./home/Signup";
import Login from "./home/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./home/Home";
import { Testing } from "./home/Testing";
function App()
{
 return (
    
 <Router>
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/register" component = {Signup} />
            {/* <Route path = "/logout" component = {Logout} /> */}
            {/* <Route path = "/profile/edit" component = {EditProfile} />
            <Route path = "/profile" component = {Profile} />
            <Route path = "/archived" component = {Archived} />
            <Route path = "/class/join" component = {JoinClass} /> */}
        
            {/* <Route path = "*" component = {ZeroFourZero} /> */}
        </Switch>
    </Router>



 )


}

export default App;