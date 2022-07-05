import React from 'react';
import './App.css';
import User from './Components/User';
import UserDemo from './Components/UserDemo';

function App() {
  // const user:{name:string , age : number} ={
  //   name : "Bablu Mia",
  //   age : 22
  // }
  // const user2:{address: string; phone: number;} ={
  //   address:"Amborkhana",
  //   phone:2345677
  // }

  const users = [
    {
      id:1,
      name:"Abdul Ahad",
      email:"abdul@gmail.com"
    },{
      id:2,
      name:"Anisul Islam",
      email:"snisul@gmail.com"
    }
    ,{
      id:3,
      name:"Rakibul Islam",
      email:"rakib@gmail.com"
    }
  ]
  return (
    <div className="App">
      <h2>Hlw react typescript || User management</h2>
      {/* <User  user={user} user2={user2} /> */}
      {/* <User  user={user} user2={user2} /> */}

      <UserDemo users={users} />
    </div>
  );
}

export default App;
