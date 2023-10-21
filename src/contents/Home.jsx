import { Info } from './Info';
import { About } from './About';
import  { Services } from './Services';
import  { Contact } from './Contact';

export const Home = () => {



  return (
    <div>
   
    <section className="home py-5 d-flex align-items-center" id="home">
        <div className="container text-light py-5"  data-aos="fade-right"> 
            <h1 className="headline">Best <span className="home_text">Coffee</span><br></br>Relaxing For You</h1>
            <p className="para para-light py-3">
                
            We invite you to embark on a sensory journey
            <br></br>that celebrates the art of coffee. Nestled in the heart
            <br></br>of our vibrant community, our café is more than just
            <br></br>a place to grab a cup.

            </p>

            <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-wifi fa-lg"></i></p>
                <p>Free Wifi</p>  
            </div>
            <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-laptop-house fa-lg"></i></p>
                <p>Local Partnerships</p>  
            </div>

            <div className="my-3">
                <a className="btn" href="#services">View Coffee</a>
            </div>
        </div> 
    </section> 

    <Info />
    <About />
    <Services />
    <Contact />

    </div>
  )
}
