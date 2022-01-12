import React from 'react'
import "./App.css"
import Home from "./main/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import ContentUs from "./pages/ContentUs"
import Pricing from "./pages/Pricing"
import NoMatch from './pages/NoMatch'





function App() {
  return (
   <React.Fragment>
     <Router>
       
       <Switch>
         <Route exact path="/website-examplae" component={Home}/>
         <Route  path="/website-examplae/AboutUs" component={AboutUs}/>
         <Route  path="/website-examplae/Blog" component={Blog}/>
         <Route  path="/website-examplae/ContentUs" component={ContentUs}/>
         <Route  path="/website-examplae/Pricing" component={Pricing}/>
         <Route   component={NoMatch}/>
       </Switch>
     </Router>
    
   </React.Fragment>
  );
}

export default App;

