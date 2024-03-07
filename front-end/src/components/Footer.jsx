import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>Our services</h5>
                    <ul className='footer-list-links'>
                        <li><a href="#">Development & IT</a></li>
                        <li><a href="#">AI Services</a></li>
                        <li><a href="#">Design & Creative</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Development</a></li> 
                        <li><a href="#">Logo Design</a></li> 
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>For Talent</h5>
                    <ul className='footer-list-links'>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Data Science & AI</a></li>
                        <li><a href="#">Mobile Development</a></li>
                        <li><a href="#">DevOps & Cloud Computing</a></li>
                        <li><a href="#">Database & Big Data Technologies</a></li> 
                        <li><a href="#">CMS Platforms</a></li> 
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Resources</h5>
                    <ul className='footer-list-links'>
                        <li><a href="#">Help & Support  </a></li>
                        <li><a href="#">Blog</a></li> 
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Company</h5>
                    <ul className='footer-list-links'>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="row social-media-border mt-5 align-items-center">
                <div className="col-md-6">
                    <div className='social-media-links-content'>
                        <h6>Follow Us</h6>
                    <div className='social-media'>
                      <ul>
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>

                    </div>
                    

                </div>
                <div className="col-md-6">
                     <div className='footer-contactus'>
                        <div className='contact-info'>
                          <span><i class="fa-solid fa-phone"></i></span> <span className='ms-2 gray'>9854213212</span>
                        </div>
                        <div className='contact-info'>
                          <span><i class="fa-solid fa-envelope"></i></span> <span className='ms-2 gray'>learn4tomorrows@gmail.com</span>
                        </div>
                     </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className='copy-rights'>
                    <span>© 2024 learn4tomorrows</span>
                        <div>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer