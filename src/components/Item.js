import Button from "./UI/Button";
import classes from "./Item.module.css";

const Item = props => {
  const delectHandler = () => {
    props.onDelect(props.id);
  };

  return (
    <div className={classes.item}>
      <div>
        <h3>{props.item}</h3>
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <Button onClick={delectHandler} type="button">
        刪除
      </Button>
    </div>
  );
};

export default Item;
