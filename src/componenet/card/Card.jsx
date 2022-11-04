import "./Card.css";

const Card = ({ large, photographer }) => {
  return (
    <div className="card-component">
      <div className="image">
        <img src={large} alt="" />
      </div>
      <h2>{photographer}</h2>
    </div>
  );
};

export default Card;
