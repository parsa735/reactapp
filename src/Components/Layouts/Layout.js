import React, { Fragment, useState } from 'react'
import Footer from './footer'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import SideBar from './Sidebar'
import routes from '../../Utils/routes'

const Layout = props => {

    const [content , setContent] = useState("content-wrapper-side-close")
    
    return (
        <div>
            <Header />
            <SideBar setContent={setContent} />
            <div className={content}>
                <Switch>
                    {
                        routes.map((route, key) => {
                            return (
                                <Route path={route.path} exact={route.exact} key={key} render={(props) => route.component} />
                            )
                        })
                    }
                </Switch>

            </div>

            <Footer />
        </div>
    )

}

export default Layout