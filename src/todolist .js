import './todolist.css'
import { Button } from 'react-bootstrap';
function ItemList(props)
{
   
    return (
        <ul>
          { props.ItemList.map((todo)=>{
            return(
                <li>
                    <div className='pragh' >
                    <div  onClick={()=>props.checkedStatus(todo.id)}>
                    <p className={todo.isChecked}>{todo.value} </p>
                    
                    </div>
                    
                    <div><Button onClick={() => {
                    props.deleteItem(todo.id);
                  }}variant="danger" className='deleteButton' >Sil</Button> 
                  </div>
                  </div>
                  </li>
          )})}
        
        </ul>
    );
}
export default  ItemList