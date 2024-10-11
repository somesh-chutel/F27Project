import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

const Home = ()=> {
    let navigate = useNavigate();
    let token = Cookies.get("jwtToken"); 

    useEffect(()=>{

        if( token === undefined ){

            navigate("/login");

        }

    },[])


    return (

        <h1>Home Component</h1>

    )
}



export default Home;