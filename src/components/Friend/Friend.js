import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import './Friend.css'

const Friend = (props) => {
    const {name,email,id} = props.friend

    const history = useHistory()
    const handleClick = (friendid) =>{
        const url = `/friend/${friendid}`
        history.push(url)
    }
    return (
        <div className="friend" >
            <h2>{name}</h2>
            <h5>{email}</h5>
            <Link to={`friend/${id}`}>See Details</Link> 
            <button onClick={() => handleClick(id)}>Details</button>
        </div>
    );
};

export default Friend;