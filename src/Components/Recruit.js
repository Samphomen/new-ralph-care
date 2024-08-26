import React, {useState} from 'react'
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const Recruit = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
  return (
    <div className='recruit'>
        <div className='recruit-top'>
            <h1>Our Recruitment Process</h1>
            <p>Our recruitment process reflects the company's unwavering commitment to its mission of enhancing the quality of life for individuals in need. We place a strong emphasis on personalized support solutions, understanding the unique challenges faced by those requiring assistance. We seek professionals who share their vision of fostering a supportive community and promoting independent living. The dedicated team of recruitment specialists at City Care and Support Limited works tirelessly to identify individuals whose values align with the company's mission to make a positive difference in the lives of those they serve.</p>
        </div>
        <div className='rec-infobox'>
            <div className='rec-info'>
                <div className='rec-info-top'>
                    <button className='rec-info-btn' onClick={() => setOpen1(!open1)}>
                        {open1 ? <FaAngleDown className='rec-info-logo' />  : <FaAngleRight className='rec-info-logo' />}
                    </button>
                    <h2 className='rec-info-topic'>Our Mission</h2>
                </div>
                {open1 && (
                    <p>
                        Our mission is to enhance the quality of life for individuals in need, offering comprehensive and personalized support solutions. We commit ourselves to compassionate care, guided by a deep understanding of the unique challenges our clients face. Whether it's assisting with daily tasks, promoting independent living, or fostering a supportive community, we strive to make a positive difference in every life we touch. Trust us as your partner in supported living, where our unwavering dedication ensures that each person receives the care they truly deserve.
                    </p>
                )}
            </div>
            <div className='rec-line'></div>
            <div className='rec-info'>
                <div className='rec-info-top'>
                    <button className='rec-info-btn' onClick={() => setOpen2(!open2)}>
                        {open2 ? <FaAngleDown className='rec-info-logo' />  : <FaAngleRight className='rec-info-logo' />}
                    </button>
                    <h2 className='rec-info-topic'>Our Values</h2>
                </div>
                {open2 && (
                    <p>
                    City Care and Support Limited is guided by core values that form the bedrock of its operations. Compassion, dignity, and respect are at the forefront of the company's approach to supported living. The recruitment process is designed to identify individuals who share these values, placing a strong emphasis on empathy and understanding. The team, driven by a commitment to person-centered care, aims to create a safe and nurturing environment for residents. These values underscore every aspect of the company's work, reinforcing the importance of treating each individual with the utmost compassion and respect.
                    </p>
                )}
            </div>
            <div className='rec-line'></div>
            <div className='rec-info'>
                <div className='rec-info-top'>
                    <button className='rec-info-btn' onClick={() => setOpen3(!open3)}>
                        {open3 ? <FaAngleDown className='rec-info-logo' />  : <FaAngleRight className='rec-info-logo' />}
                    </button>
                    <h2 className='rec-info-topic'>Our Vision</h2>
                </div>
                {
                    open3 && (
                        <p>
                        City Care and Support Limited envisions a future where individuals in need can live fulfilling and independent lives, supported by high-quality care and services. The vision is clear to create a supportive community that promotes dignity, respect, and the realization of personal potential in every aspect of supported living in the United Kingdom.
                        </p>
                    )
                }
            </div>
            <div className='rec-line'></div>
        </div>
    </div>
  )
}

export default Recruit