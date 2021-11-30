import Card from "./UI/Card";
import classes from "./Edit.module.css";

const Edit = porps => {
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="todo">待辦事項</label>
        <input id="todo" type="text" />
        <label htmlFor="date">日期</label>
        <input type="date" />
        <label htmlFor="time">時間</label>
        <input type="time" />
      </form>
    </Card>
  );
};

export default Edit;
