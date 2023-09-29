
import './Skills.css'
import data from '../Data/Data';
import SkillsProgressBar from './SkillsProgressBar';
// import { useState } from 'react';

function Skills() {

// const [getData, setGetData] = useState(data); 

    return(
    <>
    
 <h1 className='hh' style={{textAlign:"center"}}>Skills</h1>
 <p className='pp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, lectus id auctor viverra, odio justo tristique nulla, 
                    non bibendum lectus tortor vel neque. Sed at vestibulum neque, ac venenatis lorem. Nunc nec odio erat. Sed a euismod est.
                    Nullam commodo tristique erat vel blandit. Nam sit amet erat ac justo volutpat elementum. Sed lacinia justo eu ipsum venenatis,
                    eu dignissim urna laoreet. Nunc vitae efficitur libero. Proin placerat non lectus id dictum. Integer auctor metus eget felis vestibulum,
                    sed vehicula quam vehicula. Pellentesque consequat diam sit amet odio aliquam, sit amet venenatis mi gravida.
</p>
<div className="container">
    <div className="row skills">
        <div className="col-6">
            <h2>My Focus</h2>
            <h5>UI/UX Design</h5>
            <h5>Web Design</h5>
            <h5>Mobile App</h5>
            <h5>Responsive Design</h5>
        </div>
        <div className="col-6">
{/* TAKE CARE WHEN PASTING BOOTSTRAP HERE, IT'S CLASSNAME NOT CLASS AND IT'S STYLE={{}} NOT STYLE="" */}

{/* {data.skills.map((item, index) => (
              <div className="progress" role='progressbar' key={index} aria-valuenow={item.level}>
                <div className={`progress-bar bg-${getProgressBarColor(item.level)}`} style={{ width: `${item.level}%` }}>{item.name}</div>
              </div>
            ))} */}


      {data.skills.map((item, index) => (
        <SkillsProgressBar key={index} name={item.name} level={item.level} />
      ))}

</div>

        </div>
    </div>

    
    </>
    )
    }

    
    export default Skills;








{/* 
<div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success" style={{width: "100%"}} >HTML</div>
</div> */}

{/* <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-info text-dark" style={{width: "85%"}}>CSS</div>
</div>

<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning text-dark" style={{width: "75%"}}>PYTHON</div>
</div>

<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{width: "100%"}}>DJANGO</div>
</div>      */}