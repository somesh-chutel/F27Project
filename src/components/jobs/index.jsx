import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import FilterSection from '../filterSection';
import DisplayJobsCard from '../displayAllJobs';
import './index.css';

const Jobs = ()=> {

    const [allValues,setValues] = useState({

        jobsArr : []

    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const getJobsList = async()=>{

            const api = "https://apis.ccbp.in/jobs"; 

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

    },[])

    return (
        <>
        <Header/>
        <div className='filter-jobs-cont container-fluid'>

            <div className='row'>

                <div className='col-5'>
                    <FilterSection />
                </div>
                <div className='col-7'>
                    <DisplayJobsCard/>
                </div>

            </div>

        </div>
        </>

    )
}



export default Jobs;