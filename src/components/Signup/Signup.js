import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Signup.css';
import { FirebaseContex } from '../../store/Context';

export default function Signup() {
  const history =useHistory()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContex)
  const handleSubmit =(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
      result.user.updateProfile({displayName:username}).then(()=>{
        const id = result.user.uid
        firebase
          .firestore()
          .collection('users')
          .add({
            id: id,
            username: username,
            phone: phone
        }).then(()=>{
          console.log("is workig....")
            history.push("/login")
        })
      })
      .catch((err)=>{
        console.log(err.message);
      })

    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <div className='logo'>
        <img width="200px" height="200px" src={Logo}></img>
        </div>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}