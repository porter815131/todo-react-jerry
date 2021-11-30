import classes from "./Card.module.css";

const Card = props => {
  return (
    // 能讓包在card下面的容器增加別的css class
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
