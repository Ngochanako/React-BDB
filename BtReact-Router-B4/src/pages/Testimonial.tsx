import React from 'react'

export default function Testimonial() {
  return (
    <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
        Testimonial
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li
            className="breadcrumb-item text-primary active"
            aria-current="page"
          >
            Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Testimonial
        </p>
        <h1 className="text-uppercase">What Our Clients Say!</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

  )
}
