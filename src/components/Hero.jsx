function Hero() {
    return (
  <div className="container col-xxl-9 px-4 py-1">
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="/src/images/animals.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find Your Perfect</h1>
        <h1 className="display-5 fw-bold text-primary lh-1 mb-3">Companion</h1>
        <p className="lead">Every pet in our shelter has a story and is waiting to be taken home. Start your journey of pet adoption today and bring home joy and happiness.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-2">
          <button type="button" className="btn btn-primary btn-lg rounded-5 px-4 me-md-2">Adopt a Pet</button>
          <button type="button" className="btn btn-outline-secondary border-primary text-primary rounded-5 btn-lg px-4">Learn More</button>
        </div>
        <div className="d-grid gap-2 col-md-6 d-md-flex justify-content-md-start mt-5">
          <div className="row pe-5">
            <h2 className="fw-bold">50+</h2>
            <p className="fs-sm-3 fs-md-5 fs-lg-1">Pets Available</p>
          </div>
          <div className="row pe-5">
            <h2 className="fw-bold">200+</h2>
            <p className="fs-sm-3 fs-md-5 fs-lg-1">Happy Adoptions</p>
          </div>
          <div className="row pe-5">
            <h2 className="fw-bold">15+</h2>
            <p className="fs-sm-3 fs-md-5 fs-lg-1">Years Experiance</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      

      
  
      
      
    )
  }
  
  export default Hero
