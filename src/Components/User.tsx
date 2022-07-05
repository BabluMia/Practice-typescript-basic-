import React from 'react';
type obj ={
    user: {
        name: string;
        age:number
    },
    user2:{
        address:string,
        phone:number
    }

}

const User = ({user,user2} : obj ) => {
    return (
        <div style={{border:'1px solid',margin:'0.5rem'}}>
            <h3>{user.name}</h3>
            <p>bablumiah2000@gmail.com</p>
            <p>{user.age} Years Old</p>
            <p>Address : {user2.address}</p>
            <p>Phone:{user2.phone}</p>
        </div>
    );
};

export default User;