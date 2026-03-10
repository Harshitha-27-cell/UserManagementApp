import {useForm} from 'react-hook-form';

export default function AddUser() {

 const {register,handleSubmit,formState:{errors}}=useForm();

 const onUserCreate=async(newUser)=>{
  console.log(newUser);

  let res=await fetch('/user-api/user',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newUser)
  })

  let data=await res.json()

  alert(data.message)
 };

//form submit
return(
  <div className="flex justify-center mt-10">

    <form
      className="flex flex-col gap-4 w-96"
      onSubmit={handleSubmit(onUserCreate)}
    >

      <input
        className="border p-2"
        placeholder="Username"
        {...register("username",{required:true})}
      />

      <input
        className="border p-2"
        placeholder="Email"
        {...register("email",{required:true})}
      />

      <input
        type="date"
        className="border p-2"
        {...register("dateOfBirth",{required:true})}
      />

      <input
        className="border p-2"
        placeholder="Mobile Number"
        {...register("mobileNumber")}
      />

      <button className="bg-green-500 text-white p-2 rounded">
        Add User
      </button>

    </form>

  </div>
)

}