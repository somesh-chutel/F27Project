import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import FilterSection from '../filterSection';
import DisplayJobsCard from '../displayAllJobs';
import './index.css';

const Jobs = ()=> {

    const [allValues,setValues] = useState({

        jobsArr : [],
        empType : [],
        sallryRange : "",
        userSearch : ""

    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const getJobsList = async()=>{

            console.log( allValues.empType );

            const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.sallryRange}&search=${allValues.userSearch}`; 

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }


            try {

                const response = await fetch(api,options); 
                const data = await response.json();

                if( response.ok === true ){

                    setValues({...allValues,jobsArr : data.jobs});

                }

                
            } catch (error) {

                console.log( error );
                
            }


        }

        getJobsList();

    },[allValues.userSearch,allValues.empType])




    const onChangeUserIn = (e)=>{

        if( e.key === "Enter"){

            setValues({...allValues,userSearch : e.target.value});

        }

    }


    const onChangeEmpType = (value,isChecked)=>{

        if( isChecked === true){
            setValues({...allValues,empType : [...allValues.empType,value]});
        }
        else{

            setValues({...allValues,empType : allValues.empType.filter( each=> each !== value)});

        }

        
    }

    return (
        <>
        <Header/>
        <div className='filter-jobs-cont container-fluid'>

            <div className='row'>

                <div className='col-5'>
                    <FilterSection empTypeFunc = {onChangeEmpType}/>
                </div>
                <ul className='col-7 d-flex flex-column align-items-center p-3 w-100'>
                    <div>
                        <input onKeyUp={onChangeUserIn} type="search" className='form-control' style={{width:"600px"}}/>
                    </div>

                    {
                        allValues.jobsArr.map( (each)=> <DisplayJobsCard key={each.id} jobsDetails = {each}/>)
                    }
                    
                </ul>

            </div>

        </div>
        </>

    )
}



export default Jobs;