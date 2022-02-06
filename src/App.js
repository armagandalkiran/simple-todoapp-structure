import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";



function App() {

  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    console.log(tasks);
  },[tasks])

  return (
    <div>
      <Form setTasks={setTasks} tasks={tasks}/>      
      <List setTasks={setTasks} tasks={tasks}/> 
    </div>
  );
}

export default App;
