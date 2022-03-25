import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../components/Navbar';
import './Login.css'
import { projectFirestore } from '../firebase/config';

export default function Login() {
    const [usernameState,setUserNameState] = useState("");
    const [passwordState,setPasswordState] = useState("");
    const [passErrState,setPassErrState]= useState("");
    const[show,setShowState]=useState(true);
    const[deneme,setDeneme] =useState(0);
    const url = "https://localhost:44329/api/users/getall/"
  
    const { postData, isPending, error,data } = useFetch(url)
    const history = useHistory();



     const kullanici = {email : usernameState , password:passwordState}
     const handleSubmit =  (e) => {
     e.preventDefault();
     data &&   data.data.map((user)=>{
            if(user.email === kullanici.email && user.password === kullanici.password){
              const userid = user.userId
              const aracid=7;
              const date="July 11,2018";
              const konum = {lat :'58',long:'33'}
              const doc = { aracid, date, konum, date,userid }
              setDeneme(0);
               history.push(`/${user.userId}`);
            }
            else{
              setDeneme(deneme+1)
              if(deneme==3){
                    setPassErrState(3. +" deneyişiniz daha fazla deneyemezsiniz");
                    setShowState(false);
                    
              }
              else{
                setPassErrState("Yanlış Şifre " +deneme + " Deneyişiniz..")
              }
              
            }
        })
       
      }
    return (
          <><div><Navbar/></div><form onSubmit={handleSubmit} className="auth-form">
        <h2>Login </h2>
        <label>
          <span>email:</span>
          <input
            required
            type="username"
            onChange={(e) => setUserNameState(e.target.value)}
            value={usernameState} />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPasswordState(e.target.value)}
            value={passwordState} />
        </label>
        <label>{passErrState}</label>
        {!isPending && show && <button className="btn">Sign up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
      </form></>
    )
}
