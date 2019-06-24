import React from 'react'
import '../scss/Dropdown.scss';

function Dropdown(props) {

    const onSelectHandler = (e) => {
        if (e.currentTarget.value !== "Dropdown") {
            props.handler(e.currentTarget.value)
        } else {
            props.handler('')
        }
    }

    return (

        <select onChange={onSelectHandler}>
            <option>Dropdown</option>
            {
                props.data.map(data => <option key={data.id} value={data.label}>{data.label}</option>)
            }
        </select>

    )

}

export default Dropdown
