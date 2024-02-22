import React, { useState } from 'react'
import style from './todo.module.css'

function Todolist(){
const[toDos,setTodos]=useState([])
const[todo,setTodo]=useState('')
  return (
    <div className={style.app}>
      <div className={style.mainHeading}>
        <h1>ToDo List</h1>
      </div>
      <div className={style.subHeading}>
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className={style.input}>
        <input  value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:todo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className={style.todos}>
        {
            toDos.map((obj)=>{
                return(
                    <div className={style.todo}>
                        <div className={style.left}>
                        <input  onChange={(e)=>{
                            console.log(e.target.checked);
                            console.log(obj);
                            setTodos(toDos.filter(obj2=>{
                              if (obj2.id===obj.id){
                                obj2.status=e.target.checked
                              }
                              return obj2
                            }))
                        }} value={obj.status} type="checkbox" name="" id="" />
                        <p>{obj.text}</p>
                        
                        <div className={style.right}>
                        <i className="fas fa-times"></i>
                        </div>
                        
                        </div>
                    </div>
                )

            })
            
        }
        {toDos.map((obj)=>{
                            if(obj.status){
                              return (
                                <h1>{obj.text}</h1>
                              )
                            }return null
        })}
      </div>
    </div>
  )
}

export default Todolist
