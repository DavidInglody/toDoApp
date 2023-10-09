
const Task = ({name,completed,id, deleteItem,editValue}) => {

  return <div className="single-item">
    <input type="checkbox" id={name} checked={completed} onChange={()=> editValue(id)} />
    <label style={{textTransform: "capitalize",
    textDecoration: completed && "line-through"}} 
    htmlFor={name}>{name}</label>
    <button className="btn remove-btn" onClick={()=> deleteItem(id)}>delete</button>
  </div>
}
export default Task