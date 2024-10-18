import { FaStar,FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './index.css';
import { Link } from "react-router-dom";

/*
{
      "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
      "title": "Devops Engineer",
      "rating": 4,
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      "location": "Delhi",
      "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
      "employment_type": "Internship",
      "package_per_annum": "10 LPA"
}

*/


const DisplayJobsCard = (props)=> {

    const {jobsDetails} = props;


    return(

        <Link to={`/jobs/${jobsDetails.id}`}>

        <li className='jobs-card'>

                    <div className='logo-title-cont'>

                            <img className="mr-3" src={jobsDetails.company_logo_url} alt="company-logo" width="70px"/>

                            <div>
                                    <h2>{jobsDetails.title}</h2>
                                    <FaStar className="mr-2"/>
                                    <span>{jobsDetails.rating}</span>

                            </div>

                    </div>
                    {/* ppa=package per annum  */}
                    <div className="location-emptype-ppa-cont">

                            <div className="mt-3">
                                <FaLocationDot className="mr-2"/>
                                <span>{jobsDetails.location}</span>
                                <FaBriefcase className="ml-3 mr-2"/>
                                <span>{jobsDetails.employment_type}</span>
                            </div>

                            <h4>{jobsDetails.package_per_annum}</h4>

                    </div>

                    <hr />

                    <h4>Description</h4>

                    <p>{jobsDetails.job_description}</p>

        </li>

        </Link>

    )
}



export default DisplayJobsCard;