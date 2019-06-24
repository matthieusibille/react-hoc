import React, {useEffect, useContext,useState} from 'react'
import {Hoc, StateContext} from './Hoc'
import '../scss/Users.scss'
import Table from '../components/Table';

function Users(props) {

    const [users, dispatch] = useContext(StateContext);
    const [userId, setUserId] = useState('')

    useEffect( () =>{
        console.log('Users', users);
        console.log('Users props', props);
    },[users] )


    const removeUser = (e) =>{
        e.preventDefault()
        dispatch({type:'removeUser', payload: Number(userId)})
        setUserId('')
    }

    return (
        <div className="removeUserForm">
            <form onSubmit={removeUser}>
                <label>Id user</label>
                <input type="text" value={userId} onChange={ (e) => setUserId(e.currentTarget.value) } />
                <button type="submit">Remove user</button>
            </form>
            <div className="users">
                <Table data={users.users}/>
            </div>
        </div>
    )
}

export default Hoc(Users)
