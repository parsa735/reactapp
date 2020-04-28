import React from 'react'
import { HashRouter , Switch , Route } from 'react-router-dom'
import Layout from '../Components/Layouts/Layout'
import Login from '../Components/Login'
const MainRoutes = props => {



    return (
        <HashRouter>
            
                <Switch>
                    <Route exact path="/Login" name="ورود کاربران" render={props => <Login {...props} />} />
                    <Route path="/" name="home" render={props => <Layout {...props} />} />
                </Switch>
            
        </HashRouter>
    )
}

export default MainRoutes