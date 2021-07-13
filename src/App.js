import Modal from 'react-modal';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Profile from './pages/Profile/Profile';
//import Teams from './pages/Teams/Teams';
import Teams from './pages/Teams3/teamComponents/teamList';
//import Teams from './pages/Teams4/teamComponents/teamList'
import Setting from './pages/Setting/Setting';
import Calendar from './pages/Calendar/Calendar';
import Message from './pages/Message/Message';
import Header from './Components/Navbar/Navbar';
import  UpdateProfile from "./pages/Profile/UpdateProfile"
import Files from './pages/Teams/Files';
import Teamcontent from './pages/Teams/Teamcontent';
import Form from "./pages/Form/Form"
import FormLogin from './pages/Form/FormLogin'
import Nav from './pages/Form/Nav'
import Protected from "./pages/Form/Protected"
import Activate from "./pages/Form/Activate"
import Landing from './pages/Landing/landing'
import JitsiComponent from "./pages/Teams/JitsiComponent"
Modal.setAppElement('#root');


const App = () => {
  return (
   <Router>
    {/* <Header/> */}
    <main>
      <Switch>
        <Route render={props=>(<Profile {...props} />)} path="/Profile/:id">
        </Route>
        <Route path="/Teams" exact>
          <Protected Cmp={Teams}/>
        </Route>
        <Route path="/JitsiComponent" component={JitsiComponent} exact/>

        {/* <Route path="/Calendar" exact>
          <Protected Cmp={Calendar}/>
        </Route> */}
        <Route path="/Calendar" component={Calendar} exact>
          {/* <Protected Cmp={Calendar}/> */}
        </Route>
        <Route path="/Message" exact>
          <Protected Cmp={Message}/>
        </Route>
        <Route path="/Setting" exact>
          <Protected Cmp={Setting}/>
        </Route>

        <Route render={props=>(<UpdateProfile {...props} />)}  path="/Updateprofile/:id"></Route>
        {/* <Route  path="/Teamcontent/:id">
        <Protected Cmp={Teamcontent}/>
        </Route> */}
        <Route render={props=>(<Teamcontent {...props} />)}  path="/Teamcontent/:id"></Route>
        <Route path="/files">
        <Protected Cmp={Files}/>
        </Route>
        <Route  path="/Form"  component={Form}/>
        <Route  path="/FormLogin" exact component={FormLogin}/>
        <Route  path="/Activate" exact component={Activate}/>

        {/* <Redirect to="/" /> */}
        <Route path="/" exact component={Landing}/>
          
      </Switch>
    </main>
   </Router>
  );
}

export default App;
