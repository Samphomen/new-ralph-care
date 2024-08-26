import React, {useEffect} from 'react'
import livingroom from '../Images/livingroom.jpg'
import Navbar from '../Components/Navbar'
import Recruit from '../Components/Recruit'
import Header from '../Components/Header'
import Route from '../Components/Route'
import FooterPlate from '../Components/FooterPlate'
import footercaretaker from '../Images/footercaretaker.jpg'

const About = () => {
  useEffect(() => {
    document.title = 'City Care | About Us';
  }, [])
  return (
    <div>
      <Navbar />
      <Header image={footercaretaker} color='black' />
      <section className="about">
            <div className="about-image">
              <img src={livingroom} />
            </div>
            <div className="about-desc">
              <h1>About Us</h1>
              <p>
                City Care and Support Limited is a leading supported living
                provider based in the United Kingdom. We are dedicated to offering
                high-quality care and support services to individuals in need,
                ensuring they can live fulfilling and independent lives
              </p>
              <p>
                With a focus on person-centered care, our team is committed to
                creating a safe and nurturing environment for our residents. We
                strive to empower and enable our clients to achieve their personal
                goals and aspirations, promoting dignity and respect in everything
                we do
              </p>
            </div>
      </section>
      <section className='about-bottom'>
        <Recruit />
        <Route />
      </section>
      <FooterPlate />
      {/* <Footer /> */}
    </div>
  )
}

export default About