
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer(){



return(
    <>

<div className="parent footer">
    <div className="container footer">


      {/* first row has 3 cols , each one is  col-4 */}
      <div className="row footer">
          <div className="col-4">
         
              <h5>Get In Touch</h5>
              <h6> <FontAwesomeIcon icon={faEnvelope} style={{color: "white", fontSize : "1.5rem", marginRight : "1rem"}}/>mariamtameromar@gmail.com</h6>
              <h6> <FontAwesomeIcon icon={faPhone} style={{color: "white", fontSize : "1.5rem", marginRight : "1rem"}} /> +201095291133</h6>
          </div>
{/* 2nd column in first row */}
<div className="col-4">
<button type="button" class="btn btn-secondary footer">Contact Me</button>
          </div>
          {/* 3rd col in 1st row */}

          <div className="col-4">
           <FontAwesomeIcon icon={faFacebookF} style={{color: "white", fontSize : "2rem", marginRight : "1rem"}} />
          <FontAwesomeIcon icon={faLinkedin} style={{color: "white", fontSize : "2rem", marginRight : "1rem"}}/> 
          <p>copyright &copy; 2023</p>
          </div>

         

      </div>
   
</div>
</div>
    </>
)


}

export default Footer; 