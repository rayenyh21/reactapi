import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react'
import UserList from './UserList';
import axios from 'axios';

function App() {
  const[users,setUsers]=useState([
        
  ])
  useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result =>
       {setUsers(result.data) })
    )
    
  })
  
  return (
    <div className="App">
      {users.map( (user) => (
         <UserList user ={user}/> 
        
      ))}
    

    </div>
  );
}

export default App;
