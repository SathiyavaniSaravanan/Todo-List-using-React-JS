import { useRef} from "react";
import '../Styles/TaskBar.css';

const TaskBar = () => {
    const taskInputRef = useRef(null);

    const addTaskHandler = () => {
        const task = {
            task: taskInputRef.current.value
        }
        console.log(task);

        fetch("http://localhost:4000/taskItems", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(task),
        });
        taskInputRef.current.value = ""; 
    }
    
    return ( 
        <div className="taskBar">
            <input ref={taskInputRef} type="text"/>
            <button onClick={addTaskHandler}>Add Task</button>
        </div>
     );
}
 
export default TaskBar;