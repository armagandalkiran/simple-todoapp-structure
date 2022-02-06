import {useState} from "react";

const initialValue = "";

const Form = ({tasks,setTasks}) => {

  const [task,setTask] = useState(initialValue);

  const onSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks,task]);
    setTask(initialValue);
  }

  return <div>
      <form onSubmit={onSubmit}>
        <input 
        name="task" 
        placeholder="What needs to be done?"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button>Add</button>  
      </form>
  </div>;
};

export default Form;
