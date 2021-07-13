
import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import Profile from '../Profile/Profile';
import styles from './Form.module.css';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import {useHistory} from "react-router-dom"
import {Link } from 'react-router-dom'
import './Form.module.css'
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const history =useHistory();
  return (
    <>
       <div className="nav" style={{backgroundColor:"#fff",margin:"0",borderRadius:"0",boxShadow:"none",height:"55px"}}>
           <Link to="/"className="logo1" >
                {/* <img src={logo} alt='' /> */}
                <div className="logo2">
                ma<p>T </p> es
              </div>
            </Link> 
           
        
        </div>
      <div className={styles.formcontainer}>
      {/* <FormSignup submitForm={submitForm} /> */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          history.push("/Profile/:id")
        )}
      </div>
    </>
  );
};

export default Form;