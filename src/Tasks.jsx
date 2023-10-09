import Task from "./Task"

const Tasks = ({items, deleteItem,editValue}) => {



  return <div className="items">
    {items.map((oneTask)=>{
        return <Task key={oneTask.id} {...oneTask} deleteItem={deleteItem} editValue={editValue}/>
  })}
  </div>
}
export default Tasks