

import './Education.css';
// import data from '../Data/Data';
import PortofolioCard from './PortofolioCard'; 
import data from '../Data/Data';


function Education(){



return(
    <>


  <div className="portofolio" style={{height : "50rem"}}>

  <h1 style={{textAlign:"center"}}>Portofolio</h1>
    
    
    <div className="container" >


      {/* first row has 3 cols , each one is  col-4 */}
      <div className="row" >



{data.portofolio.map( (item, index)=> (



  <PortofolioCard key={index} title={item.title} 
                  description={item.description} 
                  style={index % 2 === 0 ? "#cbcbcb" : "Grey" } />
)

)}






          {/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}
{/* 2nd column in first row */}
{/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}
          {/* 3rd col in 1st row */}

          {/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}

          {/* ------------------------------------------ SECOND ROW ---------------------- */}
          {/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}
          {/* ---- 2nd col  */}
          {/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}
          {/* -----3rd col */}
          {/* <div className="col-4">
              <div className="card" style={{width : "18rem", height : "15rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">-----------------------</h6>
                  </div>
             </div>
          </div> */}

      </div>
   
</div>
</div>
    </>
)


}

export default Education; 