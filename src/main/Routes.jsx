import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserQCrud from '../components/user/UserQCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserQCrud} />
        <Redirect from='*' to='/' /> 
    </Switch>


