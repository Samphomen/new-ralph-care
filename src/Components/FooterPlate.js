import React from 'react'
import newlogo from '../Images/newlogo.png'
import AboutUsHeader from '../Images/AboutUsHeader.jpg'
import { FaPhoneVolume } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";



const FooterPlate = () => {
  return (
    <div className='fp'>
        <div className='blue-overlay'></div>
        <img src={AboutUsHeader} className='fp-image' />
        <div className='fp-box'>
            <div className='fp-logobox'>
                <img src={newlogo} />
            </div>
            <div className='fpb-bottom'>
                <div className='fpb-card'>
                    <div className='fpb-logobox'>
                        <FaPhoneVolume className='fpb-logo' />
                    </div>
                    <h2>Contact Us</h2>
                    <h3>T: 074 0245 6856</h3>
                    <h3>Email: admin@citycaresupport.com</h3>
                </div>
                <div className='fpb-card'>
                    <div className='fpb-logobox'>
                        <HiMiniBuildingOffice className='fpb-logo' />
                    </div>
                    <h2>Registered Office</h2>
                    <h3>25 Judge Link,</h3>
                    <h3>Basildon, Essex</h3>
                    <h3>SS16 5NR</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterPlate