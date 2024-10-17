import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './todo.css';

const onclickEvent =()=>
{
    
}
function TodoElement() {
  return (
    <>
    <div className="todo">
      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <Button variant="primary" onClick={onclickEvent}>Ekle</Button>
      </div>
    </>
  );
}

export default TodoElement;
