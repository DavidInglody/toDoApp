import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import { nanoid } from "nanoid";
import { ToastContainer,toast } from "react-toastify";

const setLocalStorage = (items) =>{
  localStorage.setItem("group", JSON.stringify(items))
}

const getLocalStorage = JSON.parse(localStorage.getItem("group") || "[]")

const App = () => {
  const [items,setItems] = useState(getLocalStorage)

  const addItem = (itemName) =>{
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("task added to the list")
  }

  const deleteItem = (id) =>{
    const filter = items.filter((oneItem) => oneItem.id != id)
    setItems(filter)
    setLocalStorage(filter)
    toast.success("task deleted from to the list")
  }

  const editValue = (id) =>{
    const newItems = items.map((item)=>{
      if(id=== item.id){
        const newItem = {...item, completed:!item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return <section className="section-center">
    <Form addItem={addItem}/>
    <Tasks items ={items} deleteItem={deleteItem} editValue={editValue}/>
    <ToastContainer position="top-center"/>
  </section>
};

export default App;
