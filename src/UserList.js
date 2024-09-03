
import UserCard from './UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserList = ({user}) => {
   
  return (
    <div>
       <UserCard  user={user}/> 
    </div>
  )
}

export default UserList
