import { useState } from "react"
import { toast } from "react-toastify"

const Form = ({addItem}) => {
    const [newItemName,setNewItemName]=useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        if(!newItemName){
            toast.error("Please write task")
            return
        }
        addItem(newItemName);
        setNewItemName("")
    }

  return <form onSubmit={submitHandler}>
        <h4>To do list</h4>
        <div className="form-control">
            <input type="text" className="form-input" value={newItemName} onChange={(e)=> setNewItemName(e.target.value)}/>
            <button className="btn">add task</button>
        </div>

    </form>
}
export default Form