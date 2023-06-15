import * as api from '../api'
import { setCurrentUser } from './currentUser'
export const signup = (authData,navigate) => async(dispatch)=>{
    try{
        const {data} =await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }
    catch(error){
        if((error.message.split(" "))[5] === "404"){
            alert("User already exists,Login to continue")
        }
        else{
            console.log(error)
        }
    }
}
export const login = (authData,navigate) => async(dispatch) => {
    try{
        const {data} =await api.logIn(authData)
        dispatch({type:'AUTH',data})
        navigate('/')
    }
    catch(error){
        if((error.message.split(" "))[5] === "404"){
            alert("User not found,Signup first")
        }
        else{
            console.log(error)
        }
    }
}
