

// title and description and style are the props I'm using there 
// pass style as a prop here and applu it fl card's style attribute
function PortfolioCard({ title, description, style }) {
  return (
    <div className="col-4">
      <div className="card" style={{ width: "18rem", height: "15rem", backgroundColor: style , color:"white" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-subtitle">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
