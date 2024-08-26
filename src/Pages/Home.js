import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar';
import FooterPlate from '../Components/FooterPlate';
import Route from '../Components/Route';
import Recruit from '../Components/Recruit';
import interior2 from '../Images/interior2.jpg'
import Header from '../Components/Header';

const Home = () => {
  useEffect(() => {
    document.title = 'City Care | Home';
  }, [])
  
  return (
    <div>
      <Navbar />
      <Header image={interior2} />
      <div className="body">
        <section className="top-btm-text">
          <h3>We are</h3>
          <h1>City Care Services</h1>
          <p>
            Introducing City Care and Support Limited, a leading provider of
            supported living services in Essex, Uk. With a strong commitment to
            enhancing the quality of life for individuals in need. We offer a
            comprehensive range of personalized support solutions. At City Care
            and Support Limited, we understand the unique challenges faced by
            those requiring assistance and our dedicated team of professionals
            is here to provide compassionate care and guidance. Whether it's
            helping individuals with dauly tasks, promoting independent living,
            or fostering a supportive community, our tailored services ensure
            that each person receives the care they deserve. Trust us to be your
            trusted partner in suported living as we strive to make a positive
            difference in the lives of those we serve.
          </p>
        </section>
        <Recruit />
        <section className="routes">
          <Route />
        </section>
      </div>
      <FooterPlate />
      {/* <Footer /> */}
    </div>
  );
}

export default Home