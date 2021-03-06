import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    
    const {name,username,email,phone,website} = friend;

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))
    },[])
    // console.log(friend.name)
    return (
        <div>
            <h2>Detalis about : {name}</h2>
            <h3>Full Name : {name}</h3>
            <p>User Name: {username}</p>
            <h4>Email : {email}</h4>
            <h4>Website : {website} </h4>
            <h4>Cell : {phone}</h4>
        </div>
    );
};

export default FriendDetails;