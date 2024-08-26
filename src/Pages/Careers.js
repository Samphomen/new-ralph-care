import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import FooterPlate from '../Components/FooterPlate'
import joinUsHeader from '../Images/JoinUsHeader.jpg'
import { useNavigate } from "react-router-dom"

const Careers = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'City Care | Careers';
  }, [])
  return (
    <div>
      <Navbar />
      <Header image={joinUsHeader} color='black' />
        <div className='s-box'>  
          <button onClick={() => navigate("/contact")} className='s-ibox'>JOIN OUR FABULOUS TEAM</button>
        </div>
      <FooterPlate />
      {/* <Footer /> */}
    </div>
  )
}

export default Careers