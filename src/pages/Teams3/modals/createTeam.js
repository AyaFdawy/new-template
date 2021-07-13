import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const CreateTaskPopup = ({modal, toggle, save,createTeam,taskObj}) => {
    const [teams,setTeams] =useState([])
    const [teamName, setTeamName] = useState('');
    const [teamDiscription, setTeamDiscription] = useState('');
    const [teamPhoto, setTeamPhoto] = useState(null);
    // const [file, setFile] = useState(null);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id"); //user id


    function createTeam (e) {
        e.preventDefault();
           let item={teamName,teamDiscription,teamPhoto}
           console.warn("item",item)
          
             const formData = new FormData();
             formData.append('teamName',teamName)
             formData.append('teamDiscription',teamDiscription)
             formData.append("",teamPhoto)
             console.log("form",formData)
            
                axios({
                 method:"POST",
                 url:"https://boiling-shelf-43809.herokuapp.com/team/addteam",
                 body:formData,
                 headers:{
                     "authorization":`${token}`
                 }
                 // body:JSON.stringify(formData)
               })
               .then(result=>{
                   console.warn(result)
                   console.log(result.data)
                 })
                 .catch(err=>console.log(err))
                
               }
    

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Team</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label style={{"color":"black"}}>Team Name</label>
                        <input type="text" className = "form-control" value = {teamName} onChange ={(e)=>setTeamName(e.target.value)} name = "teamName"/>
                    </div>
                    <div className = "form-group">
                        <label style={{"color":"black"}} >Description</label>
                        <textarea rows = "2" className = "form-control" value = {teamDiscription} onChange ={(e)=>setTeamDiscription(e.target.value)} name = "teamDiscription"></textarea>
                    </div>
                    <div className = "form-group">
                        <label style={{"color":"black"}} >Team Image</label>
                        <input type="file" src={teamPhoto} className = "form-control" onChange ={(e)=>{setTeamPhoto(e.target.files[0])}} name = "teamPhoto"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={createTeam}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;