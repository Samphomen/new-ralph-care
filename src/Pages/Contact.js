import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import FooterPlate from '../Components/FooterPlate'
import contactUsHeader from '../Images/ContactUsHeader.jpg'

const Contact = () => {
  useEffect(() => {
    document.title = 'City Care | Contact';
  }, [])
  return (
    <div>
      <Navbar />
      <Header image={contactUsHeader} color='black' />
      <header className='contact-header'>
          <h1 className='s-subheader'>Contact Us Today</h1>
          <h1 className="s-header">We Listen</h1>
      </header>
      <section className="contact">
            <form action="https://formspree.io/f/mdoqzazn" method="POST" className="contact-left">
              <div className="cl-top">
                <div className="cl-t1">
                  <p>Name</p>
                  <input type="text" name="name" required />
                </div>
                <div className="cl-t1">
                  <p>E-mail</p>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="cl-bottom">
                <p>Message</p>
                <textarea name="message" required />
              </div>
              <div className="cl-button">
                <button type="submit">Send</button>
              </div>
            </form>
            <div className="contact-right">
              {/* <h1>Contact Us Today</h1> */}
              <p>
                Fill out form below to get in touch with us. We are here to help
                and answer any questions you may have
              </p>
            </div>
      </section>
      <FooterPlate />
      {/* <Footer /> */}
    </div>
  )
}

export default Contact