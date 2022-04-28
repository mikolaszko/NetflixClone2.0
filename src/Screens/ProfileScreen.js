import React from 'react'
import "./ProfileScreen.css";
import Nav from "../Nav.js"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {auth} from '../firebase'
import PlansScreen from './PlansScreen.js'


function ProfileScreen() {

    const user = useSelector(selectUser)


  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit profile</h1>
            <div className='profileScreen_info'>
                <img 
                    src='https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg'
                    alt=''
                
                />

                <div className='profileScreen_details'>
                    <h2>{user.email}</h2>

                    <div className='profileScreen_plans'>
                        <h3>Plans </h3>
                        <PlansScreen />



                        <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
    
            </div>

        </div>
    </div>
  )
}

export default ProfileScreen