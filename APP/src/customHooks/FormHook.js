import { useState } from 'react';
import * as _ from 'lodash';
import Axios from 'axios';

function useForm(state){

    const [results, setResults] = useState( { tableData: undefined } )

    const filterData = (data, searchParams) =>{
        
        let names = []
        let firstnames = []
    
        data.forEach( result => {
            searchParams.forEach( (params) => {
                if(result.nom.toLowerCase().trim() === params.toLowerCase().trim() ){
                    names.push(result)
                }
                if(result.prenom.toLowerCase().trim() === params.toLowerCase().trim() ){
                    firstnames.push(result)
                }
            } )
        });
        
        switch(true){
            case names.length > 0 && firstnames.length > 0:
                setResults( { tableData: _.intersection(names, firstnames) } )
                break;
            case names.length > 0 && !firstnames.length:
                setResults( { tableData: names } )
                break;
            case firstnames.length > 0 && !names.length:
                setResults( { tableData: firstnames } )
                break;
            default:
                setResults({ tableData: undefined })
        }
        
    }

    const search = (data) =>{
    
        let searchResults
        let city = state.city
        let searchParams

        if (state.searchTerms !== '') {
            searchParams = state.searchTerms.split(' ')
        }

        if (city !== '') {
            searchResults = _.filter(data, (result) => result.ville === city)
            if (searchParams) {
                filterData(searchResults, searchParams)
            }else{
                setResults( { tableData: searchResults } )
            }
        } else {
            if (searchParams) {
                filterData(data, searchParams)
            }else{
                setResults( { tableData: undefined } )
            }
        }

    }

    const getResults = async () =>{
        try{
            const res = await Axios.get('http://localhost:3000/api/users')
            search(res.data)
        }catch(err){
            throw Error(err)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        getResults()
    }

    return {
        results,
        submitHandler
    }

}

export default useForm;