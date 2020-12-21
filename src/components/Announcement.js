import React,{useState} from "react"; 

function Announcement(props){    
    let [id] = useState(props.item.id);
    let [title,setTitle] = useState(props.item.title); 
    let [description,setDescription] = useState(props.item.description);
    let [date,setDate] = useState(props.item.date);  
    
    console.log(id)

    
    return(
        <div className="container">
           <h4> {props.item.title} </h4>
            <p>{props.item.description}</p>
            <h6>{props.item.date}</h6>           

            
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#Modal">
            Edit
            </button>

            <button type="button" className="btn" onClick={()=>{props.deleteAnnouncement()}}> 
            Delete
            </button>


            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                     <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Announcement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>

                         <div className="modal-body">
                                <h4>Title</h4>
                                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                <h4>Description</h4>
                                <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                                <h4>Date</h4>
                                <input type="date" value={date}  onChange={(e)=>{setDate(e.target.value)}}/> 
                          </div>


                        <div className="modal-footer">
                                 <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                                 <button type="button" className="btn" onClick={()=>{props.editAnnouncement(id,title,description,date)} } data-bs-dismiss="modal">Edit Announcement</button>
                        </div>
                     </div>
                </div>
            </div>









        </div>
    )
}

export default Announcement; 