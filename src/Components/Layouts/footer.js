import React from 'react'
import { Col, Row } from 'reactstrap'
import '../Styles/style.css'

const Footer = props => {
    return (
        <div className="footer-cs">
            <div className="row">

                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <center>
                        <h3 className="theme-color">سایت تحت توسعه</h3>
                    </center>

                </div>
                <div className="col-sm-4"></div>
            </div>

        </div>
    )
}

export default Footer;