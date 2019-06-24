import React, {useEffect, useState} from 'react'
import '../scss/Form.scss'

import Dropdown from './Dropdown'
import Search from './Search'
import Table from './Table'

import useForm from '../customHooks/FormHook'
import useGetComponents from '../customHooks/ComponentsHook'   

function Form(props) {

    const [dropdown, setDropdown] = useState( { data: undefined } )
    const [state, setState] = useState({ city:'', searchTerms:'' })

    const {results, submitHandler} = useForm(state)
    const {getComponent} = useGetComponents()

    const onSelectHandler = (val) => {
        setState({
            ...state,
            city: val
        })
    }

    const onGetSearchTermsHandler = (val) => {
        setState({
            ...state,
            searchTerms: val
        })
    }
    
    useEffect( () =>{
        let component = getComponent('dropdown', props.data)
        if(component){
            setDropdown({ data: component.data })
        }
    },[])
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="search-params">
                    <div className="select">
                        { dropdown.data && <Dropdown data={dropdown.data} handler={onSelectHandler} /> }
                    </div>
                    <div className="search-input">
                        <Search handler={onGetSearchTermsHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Table data={results.tableData} />
        </>
    )
}

export default Form
