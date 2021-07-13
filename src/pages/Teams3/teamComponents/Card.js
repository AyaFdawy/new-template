import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import './teams.css'
const Card = ({taskObj, index, teamId,deleteTeam, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = (teamId) => {
        deleteTeam(teamId)
    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.teamName}</span>
                <img src={taskObj.url} />
                <p className = "text-center mt-2">{taskObj.teamDescription}</p>

                <div style={{"position": "absolute", "right" : "10px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {(e)=>handleDelete(e)}></i>
                    <i className="fas fa-eye" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"} }></i>
                <i className="fas fa-user-plus" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"} }></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;