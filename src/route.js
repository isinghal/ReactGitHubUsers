import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home/home';
import GitUsers from './git-users/gitUsers';
export default () => {
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/home" component={Home}/> 
        <Route path="/gitUsers" component={GitUsers}  />    
    </Switch>
)}