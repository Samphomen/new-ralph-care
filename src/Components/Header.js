import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

const Header = ({image, color}) => {
  const navigate = useNavigate()
  const headerStyle = {
    color: color || 'white'
  }

  return (
    <div className="top">
        <div className='grey-overlay'></div>
        {/* <img src={interior2} className='top-image' /> */}
        <img src={image} className='top-image'/>
        <div className="top-text" style={headerStyle}>
          <h1>
            Empowering <br /> Independence : City Care <br /> and Support Ltd.
          </h1>
          <p>Discover our tailored care and support services in Essex.</p>
          <div className='top-button'>
            <button onClick={() => navigate("/contact")} style={headerStyle}>
                <FaArrowCircleRight className='topbtn-logo' />
                I'm looking for care services
            </button>
            {/* <button onClick={() => navigate("/careers")} style={headerStyle}>
                <FaArrowCircleRight className='topbtn-logo' />
                I'm looking for a care job
            </button> */}
          </div>
        </div>
      </div>
  )
}

export default Header