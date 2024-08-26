import React, {useEffect} from 'react'
import {services} from "../Components/ServiceList"
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import FooterPlate from '../Components/FooterPlate'
import Route from '../Components/Route'
import servicesHeader from '../Images/servicesHeader.jpg' 

const Services = () => {
  useEffect(() => {
    document.title = 'City Care | Our Services';
  }, [])
  return (
    <div>
        <Navbar />
        <Header image={servicesHeader} color='black' />
        <div className='body'>
          <section className="services">
              <h3 className='s-subheader'>We make a Difference</h3>
              <h1 className="s-header">Our Services</h1>
              <div className="service-section">
                  {services.map((service) => (
                  <div className="s-service">
                      <div className="s-imgbox">
                      <img src={service.image} />
                      </div>
                      <div className="s-words">
                      <h1>{service.heading}</h1>
                      <p>{service.content}</p>
                      </div>
                  </div>
                  ))}
              </div>
          </section>
          <Route />
        </div>
        <FooterPlate />
        {/* <Footer /> */}
    </div>
  )
}

export default Services