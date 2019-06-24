import React, { useEffect } from 'react'
import './scss/App.scss';

import Form from './components/Form';

import useComponents from './customHooks/ComponentsHook'    
import Users from './hoc/Users';
import SomeComponent from './hoc/SomeComponent';

export function App() {

    const {components, render, getComponents} = useComponents()
    
    useEffect( () =>{
        getComponents()    
    },[] )

    return (
        <div className="layout"> 
           {render && <Form data={components} /> }
           <Users data="some props"/>
           <SomeComponent />
        </div>
    )

}

export default App
