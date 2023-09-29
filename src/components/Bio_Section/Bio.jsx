

import './Bio.css'
import resume from '../../assets/Files/resume.pdf'



function Bio() {



    return(
    <>
    
    <div className='parent2'>
    
        <div className='left2'>

            <div className='circle'> </div>
               <h1>About Me</h1>
        </div>
    
        <div className='right2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, lectus id auctor viverra, odio justo tristique nulla, 
                    non bibendum lectus tortor vel neque. Sed at vestibulum neque, ac venenatis lorem. Nunc nec odio erat. Sed a euismod est.
                    Nullam commodo tristique erat vel blandit. Nam sit amet erat ac justo volutpat elementum. Sed lacinia justo eu ipsum venenatis,
                    eu dignissim urna laoreet. Nunc vitae efficitur libero. Proin placerat non lectus id dictum. Integer auctor metus eget felis vestibulum,
                    sed vehicula quam vehicula. Pellentesque consequat diam sit amet odio aliquam, sit amet venenatis mi gravida.</p>
                    <a href={resume} download='resume'>
                        <button className='bio'>Download Resume</button>
                    </a>
        </div>
    
    </div>
    
    </>
    )
    
    
    }
    


    export default Bio; 