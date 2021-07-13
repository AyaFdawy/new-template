import React,  { useEffect, useState ,Fragment } from 'react'
import { Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import styles from "./profilelayout.module.css"

import photo from "./pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { Link } from 'react-router-dom';
import { FiEdit ,FiLogOut } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
// import {UpdateProfile} from "../pages/UpdateProfile";




const ProfileLayout = (props) => {
  console.warn(props.id)
  const token=localStorage.getItem("token")
  const [users, setUser] = useState([])
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [url, setUrl] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://boiling-shelf-43809.herokuapp.com/user/"+props.id+"/profile"
    , {
      headers:{
        "authorization":`${token}`
      }
    }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        console.warn(resp.profile)
        setUser(resp.profile)
        setBio(resp.profile.bio)
        setPhone(resp.profile.phone)
        setEmail(resp.profile.email)
        // setAddress(resp.address)
        setUsername(resp.profile.name)
        setUrl(resp.profile.url)
        // setSpecialist(resp.specialist)
        // setUserId(resp.id)
      })
    })
  }
  // console.log(users.discreption);
    return (
        <div className="container-fluid">
            <Row>
            <Col md={8}style={{marginLeft:"10px",Color:'primary'}} >
                <Card className={styles.cardprofile} style={{height:"39rem"}} >
               
            
            <Card.Body style={{padding:"26px", marginTop:"10px"}} >
            <Form  className="text-primary">
              <div style={{ marginBottom:"30px",color:'#062847'}}>
              <h3>
                Edit Profile
                </h3></div>
              
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >First Name</Form.Label>
      <Form.Control type="email" placeholder="First name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="password" placeholder="Last name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Specialist</Form.Label>
    <Form.Control placeholder="Specialist.." />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Adress</Form.Label>
    <Form.Control placeholder="Apartment, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Phone</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label color="primary">Email</Form.Label>
      <Form.Control />
    </Form.Group>
    
   

  </Form.Row>
  <div className="form-group">
  <Form.Label color="primary">Bio</Form.Label>
            <textarea
            className="form-control"
        placeholder="..."
            rows="3"
            />
        </div>

  

  <Button variant="primary " style={{backgroundColor:'#062847'}}type="submit">
    Submit
  </Button>
</Form>
            </Card.Body>     
                </Card>
                </Col>
                <Col md={3}>
                
                <Card style={{ width: '26rem',height:"22rem" }} className={styles.cardprofile} >
               
                  <div className={styles.imgprofile}>
                    <Card.Img variant="top" style={{margin:"0px", borderRadius:"0%", width:"100%"}} src={url} />
                    
                          <div className={styles.editimg} > 
                              <HiOutlineCamera className={styles.iconimg} />
                 
                      </div>
                    </div> 
                    <Card.Body className="text-center">
                        <Card.Title><strong>{username}</strong></Card.Title>
                        <div>
                        {specialist ? specialist : "(Nickname)"}
                        </div>
                        <Card.Title style={{color:"rgba(0,0,0,0.3)"}}> <strong>"BIO"</strong></Card.Title>
                        <Card.Title  className="border-top border-red">
                            <ul >
                         <li>
                        <AiOutlineFacebook/>
                         </li>
                         <li>
                          <AiOutlineInstagram/>
                         </li>
                         <li>
                           <AiOutlineTwitter/>
                         </li>
                       </ul>
                        </Card.Title>
                     


                    </Card.Body>
                   
                  
                </Card>
                
              
                </Col>

                
               
            </Row>
            
        </div>
    )
}

export default ProfileLayout


