import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function UsersList() {

  let [users,setUsers]=useState([])
  let navigate=useNavigate()

 //go to user
 const gotoUser=(userObj)=>{
  navigate('/user',{state:{user:userObj}})
 }

 useEffect(()=>{
  async function getUsers(){
    let res=await fetch('/user-api/users')

    if(res.status==200){
      //extract json data
      let data=await res.json()

      //update the state
      setUsers(data.payload)
    }
  }

  getUsers()
 },[])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Users List</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {
          users.map(user=>(
            <div
              key={user._id}
              className="border p-4 rounded shadow"
            >
              <h2 className="text-lg font-semibold">{user.username}</h2>
              <p>{user.email}</p>

              <button
                className="mt-3 bg-blue-500 text-white px-4 py-1 rounded"
                onClick={()=>gotoUser(user)}
              >
                View
              </button>

            </div>
          ))
        }
      </div>

    </div>
  )
}