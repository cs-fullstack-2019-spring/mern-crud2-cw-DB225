import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ListAllRsvp from './ListAllRsvp';
import NewRsvp from "./NewRsvp";

class RSVPview extends Component{
    constructor(props){
        super(props);
        this.state ={
            rsvp:[],
        };
        this.joinTheRsvp();
    }

    joinTheRsvp=()=>{
        fetch("/rsvp")
            .then(rsvp=>{console.log(rsvp); return rsvp.json()})
            .then(list=>this.setState({rsvp:list}))
    };

    render(){
        return(
           <div>
               <Router>
                    <Link to='/rsvp'>Home</Link>
                    <Link to='/add'>New</Link>
                   <Route path='/rsvp' component={()=><ListAllRsvp rsvp={this.state.rsvp} joinTheRsvp={this.joinTheRsvp} />}/>
                   <Route path='/add' component={()=><NewRsvp rsvp={this.state.rsvp} joinTheRsvp={this.joinTheRsvp} />}/>
               </Router>
           </div>
        );
    }
}

export default RSVPview;