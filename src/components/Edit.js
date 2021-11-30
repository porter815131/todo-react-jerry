import Card from "./UI/Card";
import classes from "./Edit.module.css";
import Button from "./UI/Button";
import { useState } from "react";
import ErrorModel from "./UI/ErrorModel";
import { v4 as uuidv4 } from "uuid";

const Edit = props => {
  const [toDo, setToDo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState();

  const submitHandler = e => {
    e.preventDefault();
    if (
      toDo.trim().length === 0 ||
      date.trim().length === 0 ||
      time.trim().length === 0
    ) {
      setError({
        title: "輸入錯誤",
        message: "欄位請勿空白",
      });
      return;
    }
    const id = uuidv4();
    const key = uuidv4();
    props.onAddItem(toDo, date, time, id, key);
    setToDo("");
    setTime("");
    setDate("");
  };

  const toDoHandler = e => {
    setToDo(e.target.value);
  };

  const dateHandler = e => {
    setDate(e.target.value);
  };

  const timeHandler = e => {
    setTime(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="todo">待辦事項</label>
          <input
            id="todo"
            value={toDo}
            placeholder="請輸入待辦事項"
            type="text"
            onChange={toDoHandler}
          />
          <label htmlFor="date">日期</label>
          <input id="date" value={date} type="date" onChange={dateHandler} />
          <label htmlFor="time">時間</label>
          <input id="time" value={time} type="time" onChange={timeHandler} />
          <Button type="submit">新增</Button>
        </form>
      </Card>
    </div>
  );
};

export default Edit;
