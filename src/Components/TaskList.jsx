import { useEffect, useState } from "react";
import "../Styles/TaskList.css";

const TaskList = () => {
  const [taskListItems, setTaskListItems] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/taskItems");
      let result = await response.json();
      //   console.log(result);
      setTaskListItems(result);
    };
    fetchData();
  }, [taskListItems]);

  const removeTaskHandler = id => {
    fetch(`http://localhost:4000/taskItems/${id}`, {
      method: "DELETE",
    });
    alert("Task Completed Successfully");
  };
  const clearTaskHandler = () => {
      let clearedList = taskListItems.map(item => {
          return (fetch(`http://localhost:4000/taskItems/${item.id}`, {
            method: "DELETE",
          }));
      })
      setTaskListItems(clearedList);
  };
  return (
    <div className="taskList">
      <ul>
        {taskListItems.map(items => {
          return (
            <li key={items.id}>
              <span>{items.task}</span>
              <button onClick={() => removeTaskHandler(items.id)}>
                Completed
              </button>
            </li>
          );
        })}
      </ul>
      <div className="footerPart">
        <span>Total {taskListItems.length} Tasks</span>
        <button onClick={clearTaskHandler}>Clear ALL</button>
      </div>
    </div>
  );
};

export default TaskList;
