import React from 'react'
import {Navbar,Nav,Button} from "../../node_modules/react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./AsideBar"


function NavbarNav() {
   
    return (
        <React.Fragment>
         <div className="d-none d-lg-block">
         <Navbar >
                <Navbar.Brand className="text-danger font-weight-bold">
                    MAHDI
                </Navbar.Brand>
                <Nav className="px-5">
                    <Nav.Item className="nav-item-nav  font-weight-bold">
                        <Nav.Link className="nav-link-nav px-3" href="/">خانه</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav  font-weight-bold">
                        <Nav.Link className="nav-link-nav px-3" href="/AboutUs">درباره ی ما</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav  font-weight-bold">
                        <Nav.Link className="nav-link-nav px-3" href="/Pricing">قیمت گذاری</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="nav-item-nav  font-weight-bold">
                        <Nav.Link className="nav-link-nav px-3" href="/Blog">بلاگ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav  font-weight-bold">
                        <Nav.Link className="nav-link-nav px-3" href="/ContentUs">تماس با ما</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                <div className="mr-auto">
                  <div className="d-flex">
                  <div className="px-3">
                   <Button variant="primary">ثبت نام</Button> 
                   </div>
                   <div>
                   <Button variant="secondary">ورود</Button>
                   </div>
                  </div>
                </div>
            </Navbar>
         </div>
            <div className="d-lg-none mt-3">
                <div className="d-flex justify-content-between">
                <Navbar.Brand className="text-danger font-weight-bold">
                    MAHDI
                </Navbar.Brand>
                        <Sidebar/>    
                </div>         
            </div>

           
        </React.Fragment>
    )
}

export default NavbarNav



