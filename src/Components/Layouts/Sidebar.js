import React, { useState } from 'react'


const Sidebar = props => {
    const [value, setValue] = useState(false)
    const cssClass = { sidebarRtlClose: "sidebar-rtl-close", sidebarRtlOpen: "sidebar-rtl-open", contetnWrapperClose: "content-wrapper-side-close", contetnWrapperOpen: "content-wrapper-side-open" }
    const [isOpen, setIsOpen] = useState(cssClass.sidebarRtlClose)
    const toggle = () => {
        setValue(!value)
        if (!value) {
            setIsOpen(cssClass.sidebarRtlOpen)
            props.setContent(cssClass.contetnWrapperOpen)
        } else if (value) {
            setIsOpen(cssClass.sidebarRtlClose)
            props.setContent(cssClass.contetnWrapperClose)
        }
    }
    return (
        <div className={isOpen}>
            <button className="btn btn-block btn-info" onClick={toggle}></button>
            <div className="row">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar
