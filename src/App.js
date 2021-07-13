/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import Header from './Header';
import SendMail from './SendMail';
import Sidebar from './Sidebar';
import { 
BrowserRouter as Router, 
Switch,
Route,
Links} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from './features/mailSlice';
import {sendMessageIsOpen} from './features/mailSlice';
import {selectUser} from './features/userSlice';
import Login from './Login';
import { useDispatch} from 'react-redux';
import { login } from './features/userSlice';
import { useEffect } from 'react'
import { auth } from './firebase';

function App() {
    const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);
    const user= useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(()=>{
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(login({
                    displayName:user.displayName,
                    email:user.email,
                    photoUrl: user.photoUrl,
                }))
            }
            else{

            }
        })


    },[])
    return (
    <Router>

        {!user ?(<Login/>):(
     
        <div className = "app" >
        
        <Header/>

        <div className = "app__body">

        <Sidebar/>
        <Switch>
        <Route path ="/mail">
        <Mail/>
        </Route>
        <Route path ="/">
        <EmailList/>
        </Route>
        </Switch>
</div >

        {sendMessageIsOpen && <SendMail/>}
</div>
        )}
    </Router>
    );
}

export default App;