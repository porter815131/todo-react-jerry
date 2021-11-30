import Edit from "./components/Edit";
import List from "./components/List";
import { useState } from "react";

const App = props => {
  const [data, setData] = useState([]);

  const addItemHandler = (uToDo, uDate, uTime, uid, ukey) => {
    setData(prevItem => {
      return [
        { key: ukey, id: uid, item: uToDo, date: uDate, time: uTime },
        ...prevItem,
      ];
    });
  };

  const delectListHandler = targetId => {
    setData(prevTarget => {
      const updateTarget = prevTarget.filter(list => list.id !== targetId);
      return updateTarget;
    });
  };

  return (
    <div>
      <Edit onAddItem={addItemHandler} />
      <List listData={data} onDelectList={delectListHandler} />
    </div>
  );
};

export default App;
