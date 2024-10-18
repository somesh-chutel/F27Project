import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const JobsItemDetails = ()=>{

    const {id} = useParams();

    const token = Cookies.get("jwtToken");

    useEffect(()=>{


        const fetchJobsDetails = async()=>{


            const api = `https://apis.ccbp.in/jobs/${id}`;

            const options = {

                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            const reposnse = await fetch(api,options);

            const data = await reposnse.json();

            console.log( data );

                

           

        }

        fetchJobsDetails();


    },[])


    return(

        <>
        
                    <h1> Jobs Item Details Component </h1>

                    <h1>{id}</h1>
        
        </>

    )
}




export default JobsItemDetails;