import {useLocation} from 'react-router-dom'

export default function User() {

  let {state}=useLocation()

  let user=state?.user

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>

      {
        user &&
        <div className="border p-6 rounded shadow w-96">

          <p><b>Name :</b> {user.username}</p>
          <p><b>Email :</b> {user.email}</p>
          <p><b>DOB :</b> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
          <p><b>Mobile :</b> {user.mobileNumber}</p>

        </div>
      }

    </div>
  )
}