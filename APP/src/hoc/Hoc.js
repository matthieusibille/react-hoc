import React, { useReducer, useEffect, /* useContext, */ createContext } from 'react';
import { reducer, initialState } from './reducer';
import axios from 'axios'
import {apiUserUrl } from '../api'

export const StateContext = createContext()

export const Hoc = (WrappedComponent) => {

    const StateProvider = (props) => {
        
        const [users, dispatch] = useReducer(reducer, initialState)

        const fetchData = async () => {
            try {
                const res = await axios.get(apiUserUrl)
                dispatch({ type: 'getUsers', payload: res.data })
            } catch (err) {
                throw Error(err)
            }
        } 

        useEffect(() => {
            fetchData()
        }, [])

        return (
            <StateContext.Provider value={[users, dispatch]}>
                <WrappedComponent  {...props} />
            </StateContext.Provider>
        )
    }

    return StateProvider
}

/* export const getState = () => useContext(StateContext) */