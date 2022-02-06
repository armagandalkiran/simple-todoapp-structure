
const List = ({tasks,setTasks}) => {
    
    const deleteTask = (task) => {
        setTasks(tasks.filter((item)=>{
            return !item.toString().toLowerCase().includes(task.toLowerCase())
        }));
    }

return <div>
      <ul>
        {tasks.map((task,index)=>{
            return <span key={index}>
                <li >{task}</li>
                <button onClick={()=>deleteTask(task)}>X</button>
                </span>
        })}
      </ul>
  </div>;
};

export default List;
