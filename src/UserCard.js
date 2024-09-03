import React from 'react'


const UserCard = ({user}) => {
  
  return (
    <div class="card">
      <div class="img-avatar">
       
      </div>
      <div class="card-text">
        <div class="" >
        
        </div>
        <div class="title-total">   
          <div class="title"> <h4> {user.name}</h4></div>
          <h2>{user.username}</h2>
      
      <div class="desc">
      <h6>{user.email}</h6> 
      <h6>{user.address.street}</h6> 
      <h6>{user.phone}</h6> 
      <h6>{user.email}</h6> 
      <h6>{user.company.name}</h6> 

      </div>
      <div class="actions">
        <button><i class="far fa-heart"></i></button>
        <button><i class="far fa-envelope"></i></button>
        <button><i class="fas fa-user-friends"></i></button>
      </div></div>
    
      </div>
     
  
</div>
  )
}

export default UserCard
