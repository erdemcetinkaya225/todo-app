
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState } from 'react';
import './todo.css';
import ItemList from './todolist ';

const TodoElement = () =>{
 
  const[items,setItems]=useState([]);
 const [text,setText]=useState('');
 const [id,setId]=useState(0);


  const  onclickEvent =()=>
{

  items.push({id:id,value : text,isChecked:''})
  setItems(
    [...items],
  );
  
  setId(
    id+1
  )
 setText(
  ''
 )
};

const deleteItem=(deleteId)=>{
  const newArray= items.filter((item) => {
    return item.id !== deleteId;
  });
  setItems(
    [...newArray]
  );

}
const checkedStatus=(checkedId)=>{

  
  const statusArray= items.map((todo)=>{

    if(todo.id===checkedId&&todo.isChecked!=='checked')
   {
    todo.isChecked='checked';
    
    }
    else if(todo.id===checkedId&&todo.isChecked==='checked')
    {
      todo.isChecked='';  
    }
    else
    {

    }
    return todo;
  });



setItems(

  [...statusArray]
)
}

  return (
    <>
    <div className="todo">
   <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control"
      />
      <Button variant="primary" className='button' onClick={()=>onclickEvent()}>Ekle</Button>
      {items.length>0 &&(
        <div className='list' >
        <ItemList ItemList={items} deleteItem={deleteItem} checkedStatus={checkedStatus}/>
        </div>

      )}
      </div>
    </>
    

);
}

export default TodoElement;
