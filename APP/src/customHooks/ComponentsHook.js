import {useState} from 'react'
import axios from 'axios';

function useComponents(){

    const [components, setComponents] = useState([])
    const [render, setRender] = useState(false)

    const buildCptArray = (obj) => {
        let arr = components

        for (let property in obj) {
            if (property === "component_identifier") {

                // cas où le cpt a de la data associée
                if (obj.data) {
                    let cptData = { component_identifier: obj[property], data: obj.data }
                    arr.push(cptData)
                } else {
                    // sinon on l'insère dans l'array tel quel
                    arr.push({ component_identifier: obj[property] })
                }

                // on vérifie si il y a une propriété children présente, dans ce cas on relance la fonction en recursive
                if (obj.children && obj.children.length) {
                    buildCptArray(obj.children[0])
                }else{
                    setComponents(arr)
                }
                
            }
        }

    }

    const getComponents = async () =>{
        try{
            const res = await axios('http://localhost:3000/api/components')
            buildCptArray( res.data.components[0] )
            setRender(true)
        } catch(err){
            throw Error(err)
        }
    }
   
    const getComponent = (componentIdentifier, components) =>{
        if(components){
            let component = components.find( cpt => cpt.component_identifier === componentIdentifier )
            return component
        }
        return undefined
    }

    return {
        components,
        render,
        getComponents,
        getComponent
    }

}

export default useComponents