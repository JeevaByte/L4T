import React from 'react'
import banner from '../img/banner-img.png'
import seconeimg from '../img/sec-1-img.png'
import categoryone from '../img/coding.png'
import categorytwo from '../img/support.png'
import categorythree from '../img/design.png'
import categoryfour from '../img/idea.png'
import categoryfive from '../img/design-logo.png'
import categorysix from '../img/front-end.png'
import checkicon from '../img/check-box.png'
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Homepage = () => {
  return (
    <>
    <section className='banner'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2>Lorem ipsum dolor sit. <br/>Lorem, ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos debitis inventore exercitationem maiores perferendis facere impedit id suscipit? Provident.</p>
                    <a href="#"className='custom-btn'> Get Started</a>
                </div>
                <div className="col-md-6">
                    <img className='banner-img' src={banner} alt="banner-img" />
                </div>
            </div>
        </div>
    </section>
    <section className='home-page-sec-1'>
        <div className="container">
           <h2 className='m-0 text-center'>Our services</h2>
           <div className="row mt-4">
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                    <img src={categoryone} alt="" />
                    <h5>Development & IT</h5>
                </div>
                </a>
             </div>
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                   <img src={categorytwo} alt="" />
                    <h5>AI Services</h5>
                </div>
                </a>
             </div>
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                <img src={categoryfour} alt="" />
                    <h5>Design & Creative</h5>
                </div>
                </a>
             </div>
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                <img src={categorythree} alt="" />
                    <h5>Web Design</h5>
                </div>
                </a>
             </div>
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                <img src={categorysix} alt="" />
                    <h5>App Development</h5>
                </div>
                </a>
             </div>
             <div className="col-xl-4 col-xxl-2">
                <a href="#">
                <div className="card-category">
                <img src={categoryfive} alt="" />
                    <h5>Logo Design</h5>
                </div>
                </a>
             </div>
           </div>
        </div>
    </section>
    <section className='home-page-sec-2'>
        <div className="container">
        <h2 className='mb-5 text-center'>Lorem ipsum dolor sit amet.</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                        <img className='banner-img' src={seconeimg} alt="banner-img" />
                </div>
                <div className="col-md-6">
                    
                    <div className='sec-2-list'>
                        <div className='icon'>
                           <img src={checkicon} alt="" />
                        </div>
                        <div>
                            <h5>Save money & time</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae harum ullam ex! Labore facere, illum voluptatibus qui suscipit accusamus.</p>
                        </div>

                    </div>
                    <div className='sec-2-list'>
                        <div className='icon'>
                        <img src={checkicon} alt="" />
                        </div>
                        <div>
                            <h5>More creativity</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae harum ullam ex! Labore facere, illum voluptatibus qui suscipit accusamus.</p>
                           
                        </div>

                    </div>
                    <div className='sec-2-list'>
                        <div className='icon'>
                        <img src={checkicon} alt="" />
                        </div>
                        <div>
                            <h5>A world of design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae harum ullam ex! Labore facere, illum voluptatibus qui suscipit accusamus.</p>
                        </div>
                    </div>
                    <div className='sec-2-list'>
                        <div className='icon'>
                        <img src={checkicon} alt="" />
                        </div>
                        <div>
                            <h5>Money back guarantee</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae harum ullam ex! Labore facere, illum voluptatibus qui suscipit accusamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='home-page-sec-3'>
        <div className="container">
        <h2 className='mb-5 text-center'>Discover Our Expert Skillsets</h2>
         <div className="card">
             <div className="row">
                <div className="col-md-6">
                <Accordion  defaultActiveKey={['0']} flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Web Development</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Data Science & AI</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Mobile Development</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">App Store Developers</a></li>
                                        <li><a href="#">App Product Managers</a></li>
                                        <li><a href="#">Mobile Project Managers</a></li>
                                        <li><a href="#">Android Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Android App Developers</a></li>
                                        <li><a href="#">iOS Developers</a></li>
                                        <li><a href="#">Mobile UX Designers</a></li>
                                        <li><a href="#">Mobile UI Designers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="col-md-6">
                <Accordion defaultActiveKey={['0']} flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>DevOps & Cloud Computing</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">DevOps Engineers</a></li>
                                        <li><a href="#">Data Engineers</a></li>
                                        <li><a href="#">Database Developers</a></li>
                                        <li><a href="#">AWS Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Distributed Systems Engineers</a></li>
                                        <li><a href="#">Docker Developers</a></li>
                                        <li><a href="#">Kubernetes Experts</a></li>
                                        <li><a href="#">Azure Developers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Database & Big Data Technologies</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>CMS Platforms</Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='skills-links'>
                                        <li><a href="#">Web Designers</a></li>
                                        <li><a href="#">UI/UX Designers</a></li>
                                        <li><a href="#">Web Developers</a></li>
                                        <li><a href="#">Angular Developers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
             </div>
         </div>
        </div>
    </section>
    </>
  )
}

export default Homepage