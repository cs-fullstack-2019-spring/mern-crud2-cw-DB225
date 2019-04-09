import React, { Component } from 'react';
import EditRsvp from "./EditRsvp";

class ListAllRsvp extends Component{
    constructor(props){
        super(props);
        this.state={
            edit:false,
            editData:{},
        }
    }

    editFunc=(e)=>{
        this.setState({edit:true});
        fetch('/edit_rsvp/'+e.target.name)
            .then(data=>data.json())
            .then(response => this.setState({editData: response}));
    };

    deleteFunc=(e)=>{
        fetch('/delete',
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rsvp_person: e.target.name,
                }),
            }
        );
    };

    render(){
        const listOfRsvp = this.props.rsvp.map((eachElement)=>{
           return(
               <div key={eachElement.rsvp_person}>
                    <h1>{eachElement.rsvp_person}</h1>
                   <h2>{eachElement.rsvp_going + ""}</h2>
                   <p>
                       <button name={eachElement.rsvp_person} onClick={this.editFunc}>EDIT</button>
                       <button name={eachElement.rsvp_person} onClick={this.deleteFunc}>DELETE</button>
                   </p>
                   <hr/>
               </div>
           )
        });

        let editToggle = "";
        if(this.state.edit)
            editToggle = <EditRsvp editData={this.state.editData} joinTheRsvp={this.props.joinTheRsvp}/>;
        else
            editToggle = "";


        return(
            <div>
                {editToggle}
                {listOfRsvp}
            </div>
        );
    }
}

export default ListAllRsvp;