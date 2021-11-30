import Card from "./UI/Card";
import Item from "./Item";
import classes from "./List.module.css";
const List = props => {
  return (
    <Card className={classes.list}>
      <h2>待辦清單</h2>
      {props.listData.map(list => (
        <Item
          key={list.key}
          id={list.id}
          item={list.item}
          date={list.date}
          time={list.time}
          onDelect={props.onDelectList}
        />
      ))}
    </Card>
  );
};

export default List;
