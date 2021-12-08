import React from 'react'
import {Nav,Button} from "../../node_modules/react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


class AsideBar extends React.Component{
    constructor(props){
      super(props);
      this.state={
        sideBar: false
      }
  
      this.handleSidebar = this.handleSidebar.bind(this);
    }
  
    handleSidebar(){
      this.setState({
        sideBar : !this.state.sideBar
      });
    }
  
    render(){
      return(
        <div>
          <header className="header">
            <div className="navContainer">
              <div className="mainNav"
                  style={this.state.sideBar ? { transform: "translateX(0)" } : null}>
                
                <Nav>
                    <Nav.Item className=" font-weigh-bold">
                        <Nav.Link className="text-white px-4 py-3" href="/">خانه</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Nav.Link className="text-white px-4 py-3" href="/AboutUs">درباره ی ما</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Nav.Link className="text-white px-4 py-3" href="/pricing">قیمت گذاری</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className=" font-weigh-bold">
                        <Nav.Link className="text-white px-4 py-3" href="/Blog">بلاگ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Nav.Link className="text-white px-4 py-3" href="/ContentUs">تماس با ما</Nav.Link>
                    </Nav.Item>
                </Nav>
                
               <div className="border-top mt-4">
                  <div className="mt-4 d-flex justify-content-around">
                    
                  <Button variant="primary">ثبت نام</Button> 
                   
               
                   <Button variant="secondary">ورود</Button>
                 
                  </div>
               </div>
              </div>
              <button
                onClick = {this.handleSidebar}
                className={`navToggle ${this.state.sideBar ? "open" : null}`}>
                <span />
                <span />
                <span />
              </button>
              <div
                onClick={this.handleSidebar.bind(this)}
                className={`overlay ${this.state.sideBar ? "open" : ""}`}
                />
            </div>
          </header>
        </div>
  
      );
    }
  
  }
 export default AsideBar  