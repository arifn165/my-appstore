import React from "react";
import { NavLink } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Register = () => {
  const handleSubmit =(e)=>{
    e.preventDefault(); //eita page reload na neowar jonno
    // console.log(e.target.firstName.value);
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const password = e.target.password.value
    const conPass = e.target.confirmPassword.value
    console.log(firstName,lastName,email,password,conPass);
    createUserWithEmailAndPassword(auth,email,password );
}
    return (
    <div className="w-full max-w-sm p-8 space-y-3 rounded-xl bg-cyan-500 text-amber-100 mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm flex gap-2">
          <div>
            <label className="block text-white ml-4">First Name :</label>
            <input
              type="text"
              name="firstName"
              id="FirstName"
              placeholder="FirstName"
              className="w-[150px] px-4 py-3 rounded-xl border border-b-amber-500 focus:dark:border-violet-600"
            />
          </div>
          <div>
            <label className="block text-white ml-4">Last Name :</label>
            <input
              type="text"
              name="lastName"
              id="LastName"
              placeholder="LastName"
              className="w-[150px] px-4 py-3 rounded-xl border border-b-amber-500 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <div>
            <label htmlFor="password" className="block text-white ml-4">
              Email :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-b-amber-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white ml-4 mt-3">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-b-amber-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white ml-4 mt-3">
              Confirm Password :
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="ConfirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl border border-b-amber-500"
            />
          </div>
          <div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
              Submit
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            I have an account?
            <NavLink
              to="/Login"
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              Log In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
