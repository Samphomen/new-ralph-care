import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import palette1 from '../Images/palette1.jpg'
import palette2 from '../Images/palette2.jpg'
import palette3 from '../Images/palette3.jpg'
import { useNavigate } from "react-router-dom"

const Route = () => {
    const navigate = useNavigate()
    const handleClickToCareerPage = () => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate("/careers");
      };
    const handleClickToServicesPage = () => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate("/services");
      };
    const handleClickToContactPage = () => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate("/contact");
      };
  return (
    <div className='route-page'>
        <div className='route'>
            <div className='route-imgbox'>
                <img src={palette1} className='route-img' />
            </div>
            <div className='route-bottom'>
                <h3>Looking for Staff?</h3>
                <p>Let us help with your staffing needs. Our staff members are well trained, DBS checked, they are caring and compassionate people. Get in touch today.</p>
                <div className='route-line'></div>
                <button className='route-button' onClick={handleClickToCareerPage}>
                    LEARN MORE
                    <FaArrowCircleRight className='routebtn-logo' />
                </button>
            </div>
        </div>
        <div className='route'>
            <div className='route-imgbox'>
                <img src={palette2} className='route-img' />
            </div>
            <div className='route-bottom'>
                <h3>Our Services</h3>
                <p>We have a wide range of options, providing a reliable one stop staffing solution. We give you all the flexibility you will need to efficiently handle your personnel needs.</p>
                <div className='route-line'></div>
                <button className='route-button' onClick={handleClickToServicesPage}>
                    LEARN MORE
                    <FaArrowCircleRight className='routebtn-logo' />
                </button>
            </div>
        </div>
        <div className='route'>
            <div className='route-imgbox'>
                <img src={palette3} className='route-img' />
            </div>
            <div className='route-bottom'>
                <h3>Get in Touch</h3>
                <p>
                No. 25, Judge Link,<br />
                Basildon, Essex, SS16 5NR<br />
                Email: admin@citycaresupport.com<br />
                Telephone: 074 0245 6856
                </p>
                <div className='route-line'></div>
                <button className='route-button' onClick={handleClickToContactPage}>
                    LEARN MORE
                    <FaArrowCircleRight className='routebtn-logo' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Route