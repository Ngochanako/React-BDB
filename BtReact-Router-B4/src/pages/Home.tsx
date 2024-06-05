import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import HomePage from './HomePage'

export default function Home() {
    const active=({isActive}:{isActive:boolean})=>{
        return {
            color:isActive?'var(--primary)':' var(--light)',
        }
    }
  return (
      <>
  {/* Navbar Start */}
  <nav
    className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="mb-0 text-primary text-uppercase">
        <i className="fa fa-cut me-3" />
        HairCut
      </h1>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="" className='nav-item nav-link active'><NavLink style={active} to={'/'}>Home</NavLink></a>
        <a className="nav-item nav-link">
        <NavLink style={active} to={'about'}>About</NavLink>
        </a>
        <a href="service.html" className="nav-item nav-link">
        <NavLink style={active} to={'service'}>Service</NavLink>
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="" className="dropdown-item">
              <NavLink style={active} to={'price'}>Price</NavLink>
            </a>
            <a href="" className="dropdown-item">
              <NavLink style={active} to={'team'}>Our Barber</NavLink>
            </a>
            <a href="" className="dropdown-item">
              <NavLink style={active} to={'open'}>Working Hours</NavLink>
            </a>
            <a href="testimonial.html" className="dropdown-item">
              <NavLink style={active} to={'testimonial'}>Testimonial</NavLink>
            </a>
            <a href="" className="dropdown-item">
             <NavLink style={active} to={'404'}> 404 Page</NavLink>
            </a>
          </div>
        </div>
        <a href="" className="nav-item nav-link">
         <NavLink style={active} to={'contact'}>Contact Us</NavLink>
        </a>
      </div>
      <a
        href=""
        className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
      >
        Appointment
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  {/* Navbar End */}
 <Outlet/>
  {/* Footer Start */}
  <div
    className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Get In Touch</h4>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-map-marker-alt text-primary" />
            </div>
            <span>123 Street, New York, USA</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-phone-alt text-primary" />
            </div>
            <span>+012 345 67890</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-envelope-open text-primary" />
            </div>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Quick Links</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Newsletter</h4>
          <div className="position-relative mb-4">
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
          <div className="d-flex pt-1 m-n1">
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              Your Site Name
            </a>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              HTML Codex
            </a>
            <br />
            Distributed By:{" "}
            <a
              className="border-bottom"
              href="https://themewagon.com"
              target="_blank"
            >
              ThemeWagon
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>
  )
}
