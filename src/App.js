import React from 'react'; 
import ReactDOM from 'react-dom';
import {observer} from "mobx-react";
import store from "./store";
import Announcement from "./components/Announcement"; 
import AddForm from "./components/AddForm";
import "./css/main.css";

function App() {
  const {announcements} = store; 

  const renderAddForm = ()=>{
    ReactDOM.render(<AddForm addNew={(t,d,dd)=>{store.addAnnouncement(t,d,dd)}}/>,document.getElementById('root'));
  }
  
  return(<div className="app container">
    <div className="app--button">
    <button onClick={renderAddForm}>Add New</button>

    <input type="search" placeholder="Search" onChange={(e)=>{store.searchBy(e.target.value)}}/>
    </div>

    <div className="app--body">
    {announcements.map((item)=>{ return(
    <Announcement 
    item = {item}
    id = {item.id}
    title = {item.title}
    description = {item.description}
    date = {item.date}    
    editAnnouncement = {()=>(store.editAnnounement(item.id,item.title,item.description,item.date))}
    deleteAnnouncement = {()=>(store.deleteAnnouncement(item.id))}
    /> )} )   }
    </div>

    </div>)
}

export default observer(App);
