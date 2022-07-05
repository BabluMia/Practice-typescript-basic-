import { type } from 'os';
import React from 'react';

type Demo = {
    users: {
        id: number;
        name: string;
        email: string;
    }[]
}

const UserDemo = ({users}:Demo) => {
    return (
        <div>
            <p>User Demo</p>
            {
                users.map(user=><p key={user.id}>{user.name}</p>)
            }
        </div>
    );
};

export default UserDemo;