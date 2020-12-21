import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from "../App";


function AddForm(props){

    let [title,setTitle] = useState('');
    let [description,setDescription] = useState('');
    let [date,setDate] = useState('');
    const addNewItem = ()=>{
        props.addNew(title,description,date); 
        ReactDOM.render(<App/>,document.getElementById('root'))
    }
    return(<div>
        <input type="text" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br />
        <input type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> 
        <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} /> 

        <button onClick={addNewItem}>Add</button>


    </div>)
}

export default AddForm; 