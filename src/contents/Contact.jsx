

export const Contact = () => {
    return (
      <div>
    
   
      <section className="contact d-flex align-items-center py-5" id="contact">
          <div className="container-fluid text-light">
              <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center px-lg-5" data-aos="fade-right">
                      <div style={{width: '90%'}}>
                          <div className="text-center text-lg-start py-4 pt-lg-0">
                              <p>CONTACT</p>
                              <h2 className="py-2">Send your query</h2>
                              <p className="para-light">
                              We value your input and are here to assist with any questions or requests you may have.
                              </p>
                          </div>
                          <div>
                              <div className="row" >
                                  <div className="col-lg-6">
                                      <div className="form-group py-2">
                                          <input type="text" className="form-control form-control-input" id="exampleFormControlInput1" placeholder="Enter name"/>
                                      </div>                                
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="form-group py-2">
                                          <input type="email" className="form-control form-control-input" id="exampleFormControlInput2" placeholder="Enter phone number"/>
                                      </div>                                 
                                  </div>
                              </div>
                              <div className="form-group py-1">
                                  <input type="email" className="form-control form-control-input" id="exampleFormControlInput3" placeholder="Enter email"/>
                              </div>  
                              <div className="form-group py-2">
                                  <textarea className="form-control form-control-input" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
                              </div>                            
                          </div>
                          <div className="my-3">
                              <a className="btn form-control-submit-button" href="#your-link">Submit</a>
                          </div>
                      </div>
                  </div> 
                  <div className="col-lg-6 d-flex align-items-center" data-aos="fade-down">
                      <img className="img-fluid d-none d-lg-block" src="./assets/images/contact.jpg" alt="contact"/>        
                  </div> 
              </div>
          </div> 
      </section> 
  
      </div>
    )
  }
  