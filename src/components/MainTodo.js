import React, {useState} from 'react';
import Button from '@mui/material/Button';
import style from '../styles/todo.module.css';
import Todos from "./Todos";
import {Grid} from "@mui/material";

export default function MainTodo() {
   const [todos, setTodos] = useState([]); //initialState = boshlang'ich state
   const [inputValue, setInputValue] = useState('');
   const [edit, setEdit] = useState(null);

   const handleChange = (e) => {
      setInputValue(e.target.value)
   }

   const addTodo = () => {
      if (!inputValue) return; //agar input qiymat bolmasa hech narsa qilinmaydi
      setTodos(todos => [...todos, {title: inputValue}]);
      setInputValue(""); //submit dan kegin input ni tozalaydi
   }

   const handleDelete = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1)
      setTodos(newTodos);
   }

   const editTodo = (index) => {
      const todo = todos.find((el, i) => i === index)
      setEdit(Object.assign(todo, {index: index})); // bu yerda {title: ""} va index ni bitta obj ga solamiz
      setInputValue(todo.title);
   }

   const submitEdit = () => {
      const newTodos = [...todos] //newTodos constantaga ozlashtirvolyapmiz
      newTodos.map((el, i) => {
         if (i === edit.index) {
            return el.title = inputValue //todo obj ichidagi title ni inputValue ga ozlashtiryapmiz
         }
      })
      setTodos(newTodos);
      setEdit(null);
      setInputValue('')
   }

   return (<div className={style.container}>
         <div className={style.inputs}>
            <input type="text" onChange={handleChange} value={inputValue}/>
            {!edit ? <Button variant="contained" onClick={addTodo}>Add</Button> :
               <Button variant="contained" onClick={submitEdit}>Edit</Button>}
         </div>
         <Grid container spacing={2} className={style.todos}>
            {todos.map((el, index) => <Todos index={index} handleDelete={handleDelete} editTodo={editTodo} {...el}/> // {...el} map qilingan har bitta elemntni jonatadi
            )}
         </Grid>
      </div>)
}