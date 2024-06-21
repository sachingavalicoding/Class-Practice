// eslint-disable-next-line react/prop-types
const Card = ({ image, title, title2 }) => {
  return (
    <article className="card">
      <img src={image} alt="not found " />
      <div>
        <h4> {title} </h4>
        <h4> {title2} </h4>
      </div>
    </article>
  );
};

export default Card;
