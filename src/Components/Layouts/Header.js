import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
    
} from 'reactstrap';
import { Link } from 'react-router-dom';
const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const color = "white"
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar >
                        <NavItem >
                            <NavLink href="/" className="float-right"><span style={{ color: color }}>خانه</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="float-right"><Link to="/About" style={{ textDecoration: "none" }} ><span style={{ color: color, textDecoration: "none " }}>درباره ی ما</span></Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header