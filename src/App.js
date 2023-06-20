
import './App.css';
import TaskBar from './Components/TaskBar';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <TaskBar />
      <TaskList/>
    </div>
  );
}

export default App;
