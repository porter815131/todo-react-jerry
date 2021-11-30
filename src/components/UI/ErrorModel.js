import classes from "./ErrorModel.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModel = props => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.model}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>確定</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
