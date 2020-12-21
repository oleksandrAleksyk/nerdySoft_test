import {action, makeAutoObservable, observable} from "mobx";

class Store{

    constructor(){
        makeAutoObservable(this,{
            announcements: observable,
            setAnnouncement: action, 
            addAnnouncement: action, 
            deleteAnnouncement : action, 
            editAnnouncement : action,
            searchBy : action,
            
        })
    }


    announcements = [
        {id: 0,title: "Title 1",description: "description", date: undefined},
        {id: 1,title: "Title 2 ",description: "description", date: undefined}
    ]; 

    setAnnouncement(payload){
        this.announcements.replace(payload);
    }

    searchBy(string){
        const announcements = this.announcements
        .slice()
        .sort((item)=>(
            item.title.includes(string)
        ))
        .reverse()
        this.setAnnouncement(announcements);
    }


    addAnnouncement(title,description,date){
        let announcements = this.announcements; 
        announcements.push({
            id: announcements.length,
            title: title,
            description: description,
            date: date
        })
        this.setAnnouncement(announcements);
        
    }

    deleteAnnouncement(id){
        this.setAnnouncement(this.announcements.filter(item=>item.id !==id))
    }

    showSimilar(){

    }

    editAnnouncement(id,title,description,date){
      let announcements = this.announcements;
      announcements[id] = {
          id: id,
          title: title,
          description: description,
          date: date
      }
      this.setAnnouncement(announcements);
    }


}

export default new Store(); 