import './Hero.css'
import me from './me.png' // import the image here

function Hero() {



return(
<>

<div className='parent'>

    <div className='left'>
            <h1>Mariam Tamer</h1>
            <h4>Full Stack Developer</h4>
            <button className='contact'>Contact Me</button>
    </div>

    <div className='right'>
            <img src={me}/>
    </div>

</div>

</>
)





}

export default Hero;